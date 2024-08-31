import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  chat?: ChatWhereUniqueInput;
  id?: StringFilter;
  sender?: StringNullableFilter;
  text?: StringNullableFilter;
};
