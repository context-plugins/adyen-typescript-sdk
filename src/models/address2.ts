import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address2 = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const address2Schema: Schema<Address2> = s.object<Address2>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
