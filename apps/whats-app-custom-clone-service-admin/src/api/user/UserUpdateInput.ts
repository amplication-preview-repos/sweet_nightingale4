import { ContactUpdateManyWithoutUsersInput } from "./ContactUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  contacts?: ContactUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mobileNumber?: string | null;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  status?: string | null;
  username?: string;
};
