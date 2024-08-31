import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageUpdateInput = {
  chat?: ChatWhereUniqueInput | null;
  sender?: string | null;
  text?: string | null;
};
