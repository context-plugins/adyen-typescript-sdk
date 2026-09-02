import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address13 = {
  city?: string;
  country: string;
  postalCode?: string;
  stateOrProvince?: string;
  street?: string;
  street2?: string;
};

export const address13Schema: Schema<Address13> = s.object<Address13>({
  city: s.optional(s.string()),
  country: s.string(),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
  street2: s.optional(s.string()),
});
