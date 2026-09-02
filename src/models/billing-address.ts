import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingAddress = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const billingAddressSchema: Schema<BillingAddress> = s.object<BillingAddress>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
