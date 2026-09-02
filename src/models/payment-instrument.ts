import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentInstrument = {
  Cash: "Cash",
  Card: "Card",
} as const;
export type PaymentInstrument = (typeof PaymentInstrument)[keyof typeof PaymentInstrument] | (string & {});

export const paymentInstrumentSchema: EnumSchema<PaymentInstrument> =
  s.enumOf<PaymentInstrument>(PaymentInstrument);
