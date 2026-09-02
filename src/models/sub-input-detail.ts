import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type SubInputDetail = {
  configuration?: Record<string, string>;
  items?: Item[];
  key?: string;
  optional?: boolean;
  type?: string;
  value?: string;
};

export const subInputDetailSchema: Schema<SubInputDetail> = s.object<SubInputDetail>({
  configuration: s.optional(s.record(s.string(), s.string())),
  items: s.optional(s.array(s.lazy(() => itemSchema))),
  key: s.optional(s.string()),
  optional: s.optional(s.boolean()),
  type: s.optional(s.string()),
  value: s.optional(s.string()),
});
