import { ContactCreateNestedManyWithoutUsersInput } from "./ContactCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  contacts?: ContactCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mobileNumber?: string | null;
  password: string;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  status?: string | null;
  username: string;
};
