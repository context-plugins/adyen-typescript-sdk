import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address4 = {
  city?: string;
  companyName?: string;
  country?: string;
  postalCode?: string;
  stateOrProvince?: string;
  streetAddress?: string;
  streetAddress2?: string;
};

export const address4Schema: Schema<Address4> = s.object<Address4>({
  city: s.optional(s.string()),
  companyName: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  streetAddress: s.optional(s.string()),
  streetAddress2: s.optional(s.string()),
});
