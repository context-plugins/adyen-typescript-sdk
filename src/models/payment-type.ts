import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **Normal**
 * * **Refund**
 * * **OneTimeReservation**
 * * **FirstReservation**
 * * **UpdateReservation**
 * * **Completion**
 * * **CashAdvance**
 * * **CashDeposit**
 * * **Recurring**
 * * **Instalment**
 * * **IssuerInstalment**
 * * **PaidOut**
 */
export const PaymentType = {
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
export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType] | (string & {});

export const paymentTypeSchema: EnumSchema<PaymentType> = s.enumOf<PaymentType>(PaymentType);
