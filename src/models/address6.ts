import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address6 = {
  city?: string;
  country: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  stateOrProvince?: string;
};

export const address6Schema: Schema<Address6> = s.object<Address6>({
  city: s.optional(s.string()),
  country: s.string(),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});
