import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoreLocation = {
  city?: string;
  country: string;
  line1?: string;
  line2?: string;
  line3?: string;
  postalCode?: string;
  stateOrProvince?: string;
};

export const storeLocationSchema: Schema<StoreLocation> = s.object<StoreLocation>({
  city: s.optional(s.string()),
  country: s.string(),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});
