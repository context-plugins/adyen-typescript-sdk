import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentFlow = {
  Ecommerce: "Ecommerce",
  Pos: "POS",
} as const;
export type PaymentFlow = (typeof PaymentFlow)[keyof typeof PaymentFlow] | (string & {});

export const paymentFlowSchema: EnumSchema<PaymentFlow> = s.enumOf<PaymentFlow>(PaymentFlow);
