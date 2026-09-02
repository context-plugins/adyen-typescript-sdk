import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address7 = {
  city?: string;
  country: string;
  postalCode?: string;
  stateOrProvince?: string;
  street?: string;
  street2?: string;
};

export const address7Schema: Schema<Address7> = s.object<Address7>({
  city: s.optional(s.string()),
  country: s.string(),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
  street2: s.optional(s.string()),
});
