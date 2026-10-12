import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The work phone number provided by the cardholder. The phone number must consist of a country
 * code, followed by the number. If the value you provide does not follow the guidelines, we do not
 * submit it for authentication. > Required for Visa and JCB transactions that require 3D Secure 2
 * authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone
 * number in `telephoneNumber`.
 */
export type Phone2 = {
  /** Country code. Length: 1–3 digits. */
  cc?: string;
  /** Subscriber number. Length: 4-15 digits. */
  subscriber?: string;
};

export const phone2Schema: Schema<Phone2> = s.object<Phone2>({
  cc: s.optional(s.string()),
  subscriber: s.optional(s.string()),
});
