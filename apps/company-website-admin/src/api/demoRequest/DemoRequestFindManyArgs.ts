import { DemoRequestWhereInput } from "./DemoRequestWhereInput";
import { DemoRequestOrderByInput } from "./DemoRequestOrderByInput";

export type DemoRequestFindManyArgs = {
  where?: DemoRequestWhereInput;
  orderBy?: Array<DemoRequestOrderByInput>;
  skip?: number;
  take?: number;
};
