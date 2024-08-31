import { Message } from "../message/Message";

export type Chat = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  participants: string | null;
  updatedAt: Date;
};
