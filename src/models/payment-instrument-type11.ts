import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of payment instrument. Possible values:
 * * **Card**
 * * **Cash**
 * * **Check**
 * * **Mobile**
 * * **StoredValue**
 */
export const PaymentInstrumentType11 = {
  Card: "Card",
  Check: "Check",
  Mobile: "Mobile",
  StoredValue: "StoredValue",
  Cash: "Cash",
} as const;
export type PaymentInstrumentType11 =
  | (typeof PaymentInstrumentType11)[keyof typeof PaymentInstrumentType11]
  | (string & {});

export const paymentInstrumentType11Schema: EnumSchema<PaymentInstrumentType11> =
  s.enumOf<PaymentInstrumentType11>(PaymentInstrumentType11);
