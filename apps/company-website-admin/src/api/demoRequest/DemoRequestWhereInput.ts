import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DemoRequestWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  message?: StringNullableFilter;
};
