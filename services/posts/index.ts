import { postTypes } from "@/types";

export const getPosts = async (
  page: number,
  postsPerPage?: number,
  category?: string,
  sort?: string,
  popular?: string
): Promise<{ count: number; posts: postTypes[] }> => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&postsPerPage=${
      postsPerPage || ""
    }&category=${category || ""}&sort=${sort || ""}&popular=${popular || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};
