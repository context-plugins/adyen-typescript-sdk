import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address21 = {
  city?: string;
  companyName?: string;
  country?: string;
  postalCode?: string;
  stateOrProvince?: string;
  streetAddress?: string;
  streetAddress2?: string;
};

export const address21Schema: Schema<Address21> = s.object<Address21>({
  city: s.optional(s.string()),
  companyName: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  streetAddress: s.optional(s.string()),
  streetAddress2: s.optional(s.string()),
});
