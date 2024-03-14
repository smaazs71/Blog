import { CATEGORIES_API, DOMAIN_NAME } from "@/constants/apiEndPoints";
import { categoryTypes } from "@/types";

export const getCategories = async (): Promise<categoryTypes[]> => {
  const res = await fetch(`${DOMAIN_NAME}${CATEGORIES_API}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};
