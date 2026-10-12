import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the payment instrument. For example, "BankAccount" or "Card". */
export const PaymentInstrumentType = {
  BankAccount: "BankAccount",
  Card: "Card",
} as const;
export type PaymentInstrumentType =
  | (typeof PaymentInstrumentType)[keyof typeof PaymentInstrumentType]
  | (string & {});

export const paymentInstrumentTypeSchema: EnumSchema<PaymentInstrumentType> =
  s.enumOf<PaymentInstrumentType>(PaymentInstrumentType);
