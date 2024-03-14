import { DOMAIN_NAME } from "@/constants/apiEndPoints";
import { categoryTypes } from "@/types";

export const getCategories = async (): Promise<categoryTypes[]> => {
  const res = await fetch(`${DOMAIN_NAME}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};
