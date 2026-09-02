import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentSource = {
  Redirect: "redirect",
  Qr: "qr",
  PushNotification: "pushNotification",
} as const;
export type PaymentSource = (typeof PaymentSource)[keyof typeof PaymentSource] | (string & {});

export const paymentSourceSchema: EnumSchema<PaymentSource> = s.enumOf<PaymentSource>(PaymentSource);
