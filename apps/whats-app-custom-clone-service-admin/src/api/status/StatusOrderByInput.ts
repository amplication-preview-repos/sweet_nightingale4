import { SortOrder } from "../../util/SortOrder";

export type StatusOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  viewer?: SortOrder;
};
