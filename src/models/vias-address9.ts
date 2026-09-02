import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViasAddress9 = {
  city?: string;
  country: string;
  houseNumberOrName?: string;
  postalCode?: string;
  stateOrProvince?: string;
  street?: string;
};

export const viasAddress9Schema: Schema<ViasAddress9> = s.object<ViasAddress9>({
  city: s.optional(s.string()),
  country: s.string(),
  houseNumberOrName: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
});
