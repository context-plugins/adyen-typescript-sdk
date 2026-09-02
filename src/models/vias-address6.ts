import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViasAddress6 = {
  city?: string;
  country: string;
  houseNumberOrName?: string;
  postalCode?: string;
  stateOrProvince?: string;
  street?: string;
};

export const viasAddress6Schema: Schema<ViasAddress6> = s.object<ViasAddress6>({
  city: s.optional(s.string()),
  country: s.string(),
  houseNumberOrName: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
});
