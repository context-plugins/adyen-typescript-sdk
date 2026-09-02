import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";
import { subInputDetailSchema, type SubInputDetail } from "./sub-input-detail.js";

export type InputDetail = {
  configuration?: Record<string, string>;
  details?: SubInputDetail[];
  inputDetails?: SubInputDetail[];
  itemSearchUrl?: string;
  items?: Item[];
  key?: string;
  optional?: boolean;
  type?: string;
  value?: string;
};

export const inputDetailSchema: Schema<InputDetail> = s.object<InputDetail>({
  configuration: s.optional(s.record(s.string(), s.string())),
  details: s.optional(s.array(s.lazy(() => subInputDetailSchema))),
  inputDetails: s.optional(s.array(s.lazy(() => subInputDetailSchema))),
  itemSearchUrl: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => itemSchema))),
  key: s.optional(s.string()),
  optional: s.optional(s.boolean()),
  type: s.optional(s.string()),
  value: s.optional(s.string()),
});
