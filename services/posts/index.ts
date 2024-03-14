import { DOMAIN_NAME, POSTS_API } from "@/constants/apiEndPoints";
import { postTypes } from "@/types";

export const getPosts = async (
  page: number,
  postsPerPage?: number,
  category?: string,
  sort?: string,
  popular?: string
): Promise<{ count: number; posts: postTypes[] }> => {
  const res = await fetch(
    `${DOMAIN_NAME}${POSTS_API}?page=${page}&postsPerPage=${
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
