import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  participants?: SortOrder;
  updatedAt?: SortOrder;
};
