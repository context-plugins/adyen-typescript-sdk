import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { phone31Schema, type Phone31 } from "./phone31.js";

export type ContactDetails = {
  address: Address;
  email: string;
  phone: Phone31;
  webAddress?: string;
};

export const contactDetailsSchema: Schema<ContactDetails> = s.object<ContactDetails>({
  address: addressSchema,
  email: s.string(),
  phone: phone31Schema,
  webAddress: s.optional(s.string()),
});
