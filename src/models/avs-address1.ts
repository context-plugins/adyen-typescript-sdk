import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AvsAddress1 = {
  streetAddress: string;
  zip?: string;
};

export const avsAddress1Schema: Schema<AvsAddress1> = s.object<AvsAddress1>({
  streetAddress: s.string(),
  zip: s.optional(s.string()),
});
