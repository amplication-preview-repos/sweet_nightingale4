import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  messages?: MessageCreateNestedManyWithoutChatsInput;
  participants?: string | null;
};
