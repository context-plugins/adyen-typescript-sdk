import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the length of time that the payment account was enrolled in the cardholder’s account
 * with the 3DS Requestor. Allowed values:
 * * **01** — No account (guest checkout)
 * * **02** — During this transaction
 * * **03** — Less than 30 days
 * * **04** — 30–60 days
 * * **05** — More than 60 days
 */
export const PaymentAccInd = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
  _05: "05",
} as const;
export type PaymentAccInd = (typeof PaymentAccInd)[keyof typeof PaymentAccInd] | (string & {});

export const paymentAccIndSchema: EnumSchema<PaymentAccInd> = s.enumOf<PaymentAccInd>(PaymentAccInd);
