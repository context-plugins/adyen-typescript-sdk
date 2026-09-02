import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address5 = {
  city: string;
  country: string;
  houseNumberOrName: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const address5Schema: Schema<Address5> = s.object<Address5>({
  city: s.string(),
  country: s.string(),
  houseNumberOrName: s.string(),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});
