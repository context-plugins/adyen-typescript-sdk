import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address1 = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const address1Schema: Schema<Address1> = s.object<Address1>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
