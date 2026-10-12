import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **clearpay**. */
export type ClearpayInfo1 = {
  /** Support Url */
  supportUrl: string;
};

export const clearpayInfo1Schema: Schema<ClearpayInfo1> = s.object<ClearpayInfo1>({
  supportUrl: s.string(),
});
