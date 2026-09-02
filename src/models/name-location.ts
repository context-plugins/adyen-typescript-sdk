import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NameLocation = {
  city?: string;
  country?: string;
  countryOfOrigin?: string;
  name?: string;
  rawData?: string;
  state?: string;
};

export const nameLocationSchema: Schema<NameLocation> = s.object<NameLocation>({
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  countryOfOrigin: s.optional(s.string()),
  name: s.optional(s.string()),
  rawData: s.optional(s.string()),
  state: s.optional(s.string()),
});
