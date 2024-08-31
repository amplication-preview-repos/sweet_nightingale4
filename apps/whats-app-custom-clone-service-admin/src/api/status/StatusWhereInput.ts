import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StatusWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  viewer?: StringNullableFilter;
};
