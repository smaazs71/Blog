import { categoryTypes } from "@/types";

export const getCategories = async (): Promise<categoryTypes[]> => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};
