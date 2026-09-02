import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentAccInd = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
  _05: "05",
} as const;
export type PaymentAccInd = (typeof PaymentAccInd)[keyof typeof PaymentAccInd] | (string & {});

export const paymentAccIndSchema: EnumSchema<PaymentAccInd> = s.enumOf<PaymentAccInd>(PaymentAccInd);
