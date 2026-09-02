import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address12 = {
  city?: string;
  country: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  stateOrProvince?: string;
};

export const address12Schema: Schema<Address12> = s.object<Address12>({
  city: s.optional(s.string()),
  country: s.string(),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});
