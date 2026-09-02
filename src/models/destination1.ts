import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Destination1 = {
  countryCode?: string;
  postalCode?: string;
  stateOrProvince?: string;
};

export const destination1Schema: Schema<Destination1> = s.object<Destination1>({
  countryCode: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});
