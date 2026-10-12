import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentSchema, type Payment } from "./payment.js";
import { status5Schema, type Status5 } from "./status5.js";

export type SessionResultResponse = {
  /**
   * Contains additional information about the payment. Some fields are included only if you enable
   * them. To enable these fields in your Customer Area, go to **Developers** > **Additional data**.
   */
  additionalData?: Record<string, string>;
  /** A unique identifier of the session. */
  id?: string;
  /** A list of all authorised payments done for this session. */
  payments?: Payment[];
  /**
   * The unique reference that you provided in the original `/sessions` request. This identifies the
   * payment and is used in all communication with you about the payment status.
   */
  reference?: string;
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
  status?: Status5;
};

export const sessionResultResponseSchema: Schema<SessionResultResponse> = s.object<SessionResultResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  id: s.optional(s.string()),
  payments: s.optional(s.array(s.lazy(() => paymentSchema))),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status5Schema)),
});
