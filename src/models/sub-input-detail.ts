import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type SubInputDetail = {
  /** Configuration parameters for the required input. */
  configuration?: Record<string, string>;
  /** In case of a select, the items to choose from. */
  items?: Item[];
  /** The value to provide in the result. */
  key?: string;
  /** True if this input is optional to provide. */
  optional?: boolean;
  /** The type of the required input. */
  type?: string;
  /** The value can be pre-filled, if available. */
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
