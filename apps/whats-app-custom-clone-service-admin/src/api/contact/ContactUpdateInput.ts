import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactUpdateInput = {
  contactUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
