import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingAddress1 = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const billingAddress1Schema: Schema<BillingAddress1> = s.object<BillingAddress1>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
