import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount26Schema, type Amount26 } from "./amount26.js";
import { paymentResponse3Schema, type PaymentResponse3 } from "./payment-response3.js";
import { resultCode2Schema, type ResultCode2 } from "./result-code2.js";

export type Payment = {
  amount?: Amount26;
  paymentMethod?: PaymentResponse3;
  pspReference?: string;
  resultCode?: ResultCode2;
};

export const paymentSchema: Schema<Payment> = s.object<Payment>({
  amount: s.optional(s.lazy(() => amount26Schema)),
  paymentMethod: s.optional(s.lazy(() => paymentResponse3Schema)),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.lazy(() => resultCode2Schema)),
});
