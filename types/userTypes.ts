import { commentTypes, postTypes } from ".";

export interface userTypes {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  accounts: object; //Account[];
  sessions: object; //Session[];
  Post: postTypes[];
  Comment: commentTypes[];
}
