import { categoryTypes, userTypes } from ".";

export interface postTypes {
  title: string;
  category?: string;
  image?: string;
  href?: string;
  customStyles?: object;
  author?: string;
  date?: string;

  _id: string;

  createdAt: Date;
  slug: string;
  // title: string;
  desc: string;
  img?: string;
  views: number;
  catSlug: string;
  cat?: categoryTypes;
  userEmail: string;
  user?: userTypes;
  comments: Comment[];
}
