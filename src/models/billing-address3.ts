import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingAddress3 = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const billingAddress3Schema: Schema<BillingAddress3> = s.object<BillingAddress3>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
