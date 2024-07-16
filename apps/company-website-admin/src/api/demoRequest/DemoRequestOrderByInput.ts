import { SortOrder } from "../../util/SortOrder";

export type DemoRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
};
