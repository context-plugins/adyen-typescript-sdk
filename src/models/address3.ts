import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address3 = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const address3Schema: Schema<Address3> = s.object<Address3>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
