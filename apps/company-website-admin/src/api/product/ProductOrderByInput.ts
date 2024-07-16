import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  imageUrl?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
};
