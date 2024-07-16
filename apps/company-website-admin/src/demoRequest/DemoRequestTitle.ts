import { DemoRequest as TDemoRequest } from "../api/demoRequest/DemoRequest";

export const DEMOREQUEST_TITLE_FIELD = "name";

export const DemoRequestTitle = (record: TDemoRequest): string => {
  return record.name?.toString() || String(record.id);
};
