import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentType1 = {
  Normal: "Normal",
  Refund: "Refund",
  OneTimeReservation: "OneTimeReservation",
  FirstReservation: "FirstReservation",
  UpdateReservation: "UpdateReservation",
  Completion: "Completion",
  CashAdvance: "CashAdvance",
  CashDeposit: "CashDeposit",
  Recurring: "Recurring",
  Instalment: "Instalment",
  IssuerInstalment: "IssuerInstalment",
  PaidOut: "PaidOut",
} as const;
export type PaymentType1 = (typeof PaymentType1)[keyof typeof PaymentType1] | (string & {});

export const paymentType1Schema: EnumSchema<PaymentType1> = s.enumOf<PaymentType1>(PaymentType1);
