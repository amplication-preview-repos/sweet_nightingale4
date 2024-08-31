import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  contacts?: ContactListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mobileNumber?: StringNullableFilter;
  profilePicture?: JsonFilter;
  status?: StringNullableFilter;
  username?: StringFilter;
};
