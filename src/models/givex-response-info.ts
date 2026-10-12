import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GivexResponseInfo = {
  /** The three-character ISO currency code */
  currencyCode?: string;
  /** The password provided by the acquirer. */
  password?: string;
  /** The sales channel used for the payment. */
  paymentFlow?: string;
  /** The username provided by the acquirer. */
  username?: string;
};

export const givexResponseInfoSchema: Schema<GivexResponseInfo> = s.object<GivexResponseInfo>({
  currencyCode: s.optional(s.string()),
  password: s.optional(s.string()),
  paymentFlow: s.optional(s.string()),
  username: s.optional(s.string()),
});
