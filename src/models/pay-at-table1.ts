import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
import { paymentInstrumentSchema, type PaymentInstrument } from "./payment-instrument.js";

/** Settings for [Pay-at-table](https://docs.adyen.com/point-of-sale/pay-at-x) features. */
export type PayAtTable1 = {
  /** Allowed authentication methods: Magswipe, Manual Entry. */
  authenticationMethod?: AuthenticationMethod;
  /** Enable Pay at table. */
  enablePayAtTable?: boolean;
  /**
   * Sets the allowed payment instrument for Pay at table transactions. Can be: **cash** or
   * **card**. If not set, the terminal presents both options.
   */
  paymentInstrument?: PaymentInstrument | null;
};

export const payAtTable1Schema: Schema<PayAtTable1> = s.object<PayAtTable1>({
  authenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  enablePayAtTable: s.optional(s.boolean()),
  paymentInstrument: s.optionalNullable(s.lazy(() => paymentInstrumentSchema)),
});
