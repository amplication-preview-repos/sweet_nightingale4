import { Chat } from "../chat/Chat";

export type Message = {
  chat?: Chat | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  text: string | null;
  updatedAt: Date;
};
