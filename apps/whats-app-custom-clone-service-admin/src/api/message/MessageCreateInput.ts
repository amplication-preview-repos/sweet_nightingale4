import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageCreateInput = {
  chat?: ChatWhereUniqueInput | null;
  sender?: string | null;
  text?: string | null;
};
