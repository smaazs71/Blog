"use client";
import Image from "next/image";
import styles from "./write.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { firebaseApp } from "@/utils";
import { postTypes } from "@/types";
import dynamic from "next/dynamic";
import { DOMAIN_NAME, POSTS_API } from "@/constants/apiEndPoints";
// import dynamic from "next/dynamic";

const storage = getStorage(firebaseApp);

const WritePage = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const [file, setFile] = useState<null | File>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");

  const { status } = useSession();

  const router = useRouter();

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch(`${DOMAIN_NAME}${POSTS_API}`, {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: "coding",
      }),
    });
    if (res.status === 200) {
      const body: postTypes = (await res.json()) as unknown as postTypes;
      console.log(body);

      router.push("/posts/" + body.slug);
      setFile(null);
      setOpen(false);
      setValue("");
      setMedia("");
      setTitle("");
    } else {
      throw new Error(JSON.stringify(res.json()));
    }
    console.log(res);
  };

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + ((file && file.name) || "");

      const storageRef = ref(storage, name);

      const uploadTask = file && uploadBytesResumable(storageRef, file);

      uploadTask &&
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
              console.log("File available at", downloadURL);
            });
          }
        );
    };
    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status !== "authenticated") {
    router.push("/login");
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={title}
        className={styles.input}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <div className={styles.inputFiles}>
          <button
            className={styles.button}
            onClick={() => setOpen((open) => !open)}
          >
            <Image
              src={"/display-icons/categories/plus.png"}
              alt="plus Sign"
              width={23}
              height={23}
            />
          </button>
          {
            <div className={`${styles.add} ${open ? styles.h100 : styles.h0}`}>
              <div className="">
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="image-upload"
                  onChange={(e) => setFile(e.target.files && e.target.files[0])}
                />
                <label htmlFor="image-upload">
                  <div className={styles.addButton}>
                    <Image
                      src={"/display-icons/categories/image.png"}
                      alt="plus Sign"
                      width={23}
                      height={23}
                    />
                  </div>
                </label>
              </div>
              <div className="">
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files && e.target.files[0])}
                  id="external-upload"
                />
                <label htmlFor="external-upload">
                  <div className={styles.addButton}>
                    <Image
                      src={"/display-icons/categories/external.png"}
                      alt="plus Sign"
                      width={23}
                      height={23}
                    />
                  </div>
                </label>
              </div>
              <div className="">
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files && e.target.files[0])}
                  id="video-upload"
                />
                <label htmlFor="video-upload">
                  <div className={styles.addButton}>
                    <Image
                      src={"/display-icons/categories/video.png"}
                      alt="plus Sign"
                      width={23}
                      height={23}
                    />
                  </div>
                </label>
              </div>
            </div>
          }
        </div>

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        ></ReactQuill>
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
