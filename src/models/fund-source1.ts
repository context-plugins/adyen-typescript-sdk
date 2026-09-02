import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { card1Schema, type Card1 } from "./card1.js";
import { nameSchema, type Name } from "./name.js";

export type FundSource1 = {
  additionalData?: Record<string, string>;
  billingAddress?: Address;
  card?: Card1;
  shopperEmail?: string;
  shopperName?: Name;
  telephoneNumber?: string;
};

export const fundSource1Schema: Schema<FundSource1> = s.object<FundSource1>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => card1Schema)),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  telephoneNumber: s.optional(s.string()),
});
