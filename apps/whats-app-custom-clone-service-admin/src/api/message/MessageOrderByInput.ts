import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  chatId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sender?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
