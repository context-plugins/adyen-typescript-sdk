import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The source used to obtain the payload. Possible values: `qr`, `redirect`, and `pushNotification`.
 */
export const PaymentSource2 = {
  Redirect: "redirect",
  Qr: "qr",
  PushNotification: "pushNotification",
} as const;
export type PaymentSource2 = (typeof PaymentSource2)[keyof typeof PaymentSource2] | (string & {});

export const paymentSource2Schema: EnumSchema<PaymentSource2> = s.enumOf<PaymentSource2>(PaymentSource2);
