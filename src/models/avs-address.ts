import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AvsAddress = {
  streetAddress: string;
  zip?: string;
};

export const avsAddressSchema: Schema<AvsAddress> = s.object<AvsAddress>({
  streetAddress: s.string(),
  zip: s.optional(s.string()),
});
