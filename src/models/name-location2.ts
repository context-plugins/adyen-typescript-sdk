import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NameLocation2 = {
  city?: string;
  country?: string;
  countryOfOrigin?: string;
  name?: string;
  rawData?: string;
  state?: string;
};

export const nameLocation2Schema: Schema<NameLocation2> = s.object<NameLocation2>({
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  countryOfOrigin: s.optional(s.string()),
  name: s.optional(s.string()),
  rawData: s.optional(s.string()),
  state: s.optional(s.string()),
});
