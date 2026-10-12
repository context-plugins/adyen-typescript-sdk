import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneNumber1Schema, type PhoneNumber1 } from "./phone-number1.js";

/** Support information for the legal entity. Required if you have a platform setup. */
export type Support1 = {
  /** The support email address of the legal entity. Required if you have a platform setup. */
  email?: string;
  /** The support phone number of the legal entity. Required if you have a platform setup. */
  phone?: PhoneNumber1;
};

export const support1Schema: Schema<Support1> = s.object<Support1>({
  email: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phoneNumber1Schema)),
});
