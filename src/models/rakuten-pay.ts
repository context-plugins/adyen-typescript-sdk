import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type47, type47Schema } from "./type47.js";

export type RakutenPay = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **rakutenpay** @default Type47.Rakutenpay */
  type?: Type47;
};

export const rakutenPaySchema: Schema<RakutenPay> = s.object<RakutenPay>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type47Schema, Type47.Rakutenpay),
});
