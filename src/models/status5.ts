import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the session. The status included in the response doesn't get updated. Don't make
 * the request again to check for payment status updates.
 *
 * Possible values:
 * * **completed**: the shopper completed the payment, and the payment was authorized.
 * * **paymentPending**: the shopper is in the process of making the payment. This applies to
 *   payment methods with an asynchronous flow, like voucher payments where the shopper completes
 *   the payment in a physical shop.
 * * **refused**: the session has been refused, because of too many refused payment attempts. The
 *   shopper can no longer complete the payment with this session.
 * * **canceled**: the shopper canceled the payment.
 * * **expired**: the session expired. The shopper can no longer complete the payment with this
 *   session. By default, the session expires one hour after it is created.
 */
export const Status5 = {
  Active: "active",
  Canceled: "canceled",
  Completed: "completed",
  Expired: "expired",
  PaymentPending: "paymentPending",
  Refused: "refused",
} as const;
export type Status5 = (typeof Status5)[keyof typeof Status5] | (string & {});

export const status5Schema: EnumSchema<Status5> = s.enumOf<Status5>(Status5);
