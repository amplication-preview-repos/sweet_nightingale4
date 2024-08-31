import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactCreateInput = {
  contactUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
