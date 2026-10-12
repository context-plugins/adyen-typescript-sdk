import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The shopper's full name. This object is required for some payment methods such as AfterPay,
 * Klarna, or if you're enrolled in the PayPal Seller Protection program.
 */
export type Name4 = {
  /** The first name. */
  firstName: string;
  /** The last name. */
  lastName: string;
};

export const name4Schema: Schema<Name4> = s.object<Name4>({
  firstName: s.string(),
  lastName: s.string(),
});
