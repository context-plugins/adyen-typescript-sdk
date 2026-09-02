import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViasAddress4 = {
  city?: string;
  country: string;
  houseNumberOrName?: string;
  postalCode?: string;
  stateOrProvince?: string;
  street?: string;
};

export const viasAddress4Schema: Schema<ViasAddress4> = s.object<ViasAddress4>({
  city: s.optional(s.string()),
  country: s.string(),
  houseNumberOrName: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
});
