import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { phone31Schema, type Phone31 } from "./phone31.js";

export type ContactDetails = {
  /** The address of the account holder. */
  address: Address;
  /** The email address of the account holder. */
  email: string;
  /** The phone number of the account holder. */
  phone: Phone31;
  /** The URL of the account holder's website. */
  webAddress?: string;
};

export const contactDetailsSchema: Schema<ContactDetails> = s.object<ContactDetails>({
  address: addressSchema,
  email: s.string(),
  phone: phone31Schema,
  webAddress: s.optional(s.string()),
});
