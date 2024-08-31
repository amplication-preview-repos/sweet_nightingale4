import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactWhereInput = {
  contactUser?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
