import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of the payment link. Possible values:
 * * **active**: The link can be used to make payments.
 * * **expired**: The expiry date for the payment link has passed. Shoppers can no longer use the
 *   link to make payments.
 * * **completed**: The shopper completed the payment.
 * * **paymentPending**: The shopper is in the process of making the payment. Applies to payment
 *   methods with an asynchronous flow.
 */
export const Status3 = {
  Active: "active",
  Completed: "completed",
  Expired: "expired",
  Paid: "paid",
  PaymentPending: "paymentPending",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
