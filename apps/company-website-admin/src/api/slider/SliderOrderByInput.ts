import { SortOrder } from "../../util/SortOrder";

export type SliderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  imageUrl?: SortOrder;
  order?: SortOrder;
};
