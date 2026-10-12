import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **givex** details */
export type GivexResponseInfo1 = {
  /** The three-character ISO currency code */
  currencyCode?: string;
  /** The password provided by the acquirer. */
  password?: string;
  /** The sales channel used for the payment. */
  paymentFlow?: string;
  /** The username provided by the acquirer. */
  username?: string;
};

export const givexResponseInfo1Schema: Schema<GivexResponseInfo1> = s.object<GivexResponseInfo1>({
  currencyCode: s.optional(s.string()),
  password: s.optional(s.string()),
  paymentFlow: s.optional(s.string()),
  username: s.optional(s.string()),
});
