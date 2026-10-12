import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";
import { subInputDetailSchema, type SubInputDetail } from "./sub-input-detail.js";

export type InputDetail = {
  /** Configuration parameters for the required input. */
  configuration?: Record<string, string>;
  /** Input details can also be provided recursively. */
  details?: SubInputDetail[];
  /**
   * Input details can also be provided recursively (deprecated).
   *
   * @deprecated
   */
  inputDetails?: SubInputDetail[];
  /** In case of a select, the URL from which to query the items. */
  itemSearchUrl?: string;
  /** In case of a select, the items to choose from. */
  items?: Item[];
  /** The value to provide in the result. */
  key?: string;
  /** True if this input value is optional. */
  optional?: boolean;
  /** The type of the required input. */
  type?: string;
  /** The value can be pre-filled, if available. */
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
