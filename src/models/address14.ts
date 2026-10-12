import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The address of the store. */
export type Address14 = {
  city?: string;
  countryCode?: string;
  postalCode?: string;
  stateOrProvince?: string;
  streetAddress?: string;
  streetAddress2?: string;
};

export const address14Schema: Schema<Address14> = s.object<Address14>({
  city: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  streetAddress: s.optional(s.string()),
  streetAddress2: s.optional(s.string()),
});
