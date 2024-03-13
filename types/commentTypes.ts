import { postTypes, userTypes } from ".";

export interface commentTypes {
  id: string;
  createdAt: Date;
  desc: string;
  user?: userTypes;
  userEmail: string;
  postSlug: string;
  post?: postTypes;
}
