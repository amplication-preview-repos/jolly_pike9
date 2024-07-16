import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SliderWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  imageUrl?: StringNullableFilter;
  order?: IntNullableFilter;
};
