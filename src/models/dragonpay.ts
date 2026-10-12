import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type28Schema, type Type28 } from "./type28.js";

export type Dragonpay = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * The Dragonpay issuer value of the shopper's selected bank. Set this to an **id** of a Dragonpay
   * issuer to preselect it.
   */
  issuer: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** The shopper’s email address. */
  shopperEmail?: string;
  /**
   * **dragonpay**
   */
  type: Type28;
};

export const dragonpaySchema: Schema<Dragonpay> = s.object<Dragonpay>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  sdkData: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  type: type28Schema,
});
