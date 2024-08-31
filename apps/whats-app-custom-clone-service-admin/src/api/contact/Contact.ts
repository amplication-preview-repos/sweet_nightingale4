import { User } from "../user/User";

export type Contact = {
  contactUser: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
