import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentInstrumentType1 = {
  Card: "Card",
  Check: "Check",
  Mobile: "Mobile",
  StoredValue: "StoredValue",
  Cash: "Cash",
} as const;
export type PaymentInstrumentType1 =
  | (typeof PaymentInstrumentType1)[keyof typeof PaymentInstrumentType1]
  | (string & {});

export const paymentInstrumentType1Schema: EnumSchema<PaymentInstrumentType1> =
  s.enumOf<PaymentInstrumentType1>(PaymentInstrumentType1);
