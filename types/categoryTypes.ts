import { postTypes } from ".";

export interface categoryTypes {
  _id: string;
  slug: string;
  title: string;
  img?: string;
  Posts: postTypes[];
}
