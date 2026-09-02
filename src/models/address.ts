import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
