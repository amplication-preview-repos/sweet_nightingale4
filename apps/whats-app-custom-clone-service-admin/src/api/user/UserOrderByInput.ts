import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  mobileNumber?: SortOrder;
  password?: SortOrder;
  profilePicture?: SortOrder;
  roles?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
