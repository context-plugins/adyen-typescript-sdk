import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingAddress4 = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const billingAddress4Schema: Schema<BillingAddress4> = s.object<BillingAddress4>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
