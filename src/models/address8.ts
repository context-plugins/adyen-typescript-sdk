import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address8 = {
  city?: string;
  countryCode?: string;
  postalCode?: string;
  stateOrProvince?: string;
  streetAddress?: string;
  streetAddress2?: string;
};

export const address8Schema: Schema<Address8> = s.object<Address8>({
  city: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  streetAddress: s.optional(s.string()),
  streetAddress2: s.optional(s.string()),
});
