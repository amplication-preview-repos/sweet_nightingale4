import { Contact } from "../contact/Contact";
import { JsonValue } from "type-fest";

export type User = {
  contacts?: Array<Contact>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mobileNumber: string | null;
  profilePicture: JsonValue;
  roles: JsonValue;
  status: string | null;
  updatedAt: Date;
  username: string;
};
