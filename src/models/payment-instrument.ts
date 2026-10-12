import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sets the allowed payment instrument for Pay at table transactions. Can be: **cash** or **card**.
 * If not set, the terminal presents both options.
 */
export const PaymentInstrument = {
  Cash: "Cash",
  Card: "Card",
} as const;
export type PaymentInstrument = (typeof PaymentInstrument)[keyof typeof PaymentInstrument] | (string & {});

export const paymentInstrumentSchema: EnumSchema<PaymentInstrument> =
  s.enumOf<PaymentInstrument>(PaymentInstrument);
