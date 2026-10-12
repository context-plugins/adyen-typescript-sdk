import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { disputeStatus1Schema, type DisputeStatus1 } from "./dispute-status1.js";
import { duplicateInfo1Schema, type DuplicateInfo1 } from "./duplicate-info1.js";
import { fraudInfo1Schema, type FraudInfo1 } from "./fraud-info1.js";
import { notDeliveredInfo1Schema, type NotDeliveredInfo1 } from "./not-delivered-info1.js";
import { otherInfo3Schema, type OtherInfo3 } from "./other-info3.js";

export type DisputeRequest = {
  /** Your description for the dispute. */
  description?: string;
  /**
   * The amount for which you dispute the transaction. The disputed amount cannot be greater than
   * the transaction amount. If you do not provide an amount, the entire transaction amount will be
   * disputed.
   */
  disputedAmount?: Amount17;
  /**
   * Additional information for raising a dispute of `type` **duplicate**. Required for disputes of
   * `type` **duplicate**.
   */
  duplicateInfo?: DuplicateInfo1;
  /**
   * Additional information for raising a dispute of `type` **fraud**. Required for disputes of
   * `type` **fraud**.
   */
  fraudInfo?: FraudInfo1;
  /**
   * Additional information for raising a dispute of `type` **notDelivered**. Required for disputes
   * of `type` **notDelivered**.
   */
  notDeliveredInfo?: NotDeliveredInfo1;
  /**
   * Additional information for raising a dispute of `type` **other**. Required for disputes of
   * `type` **other**.
   *
   * **Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit
   * any disputes for this dispute `type` at this time.
   */
  otherInfo?: OtherInfo3;
  /**
   * The current status of the dispute.
   *
   * When you create a dispute, you can only set the `status` to **draft**. When you update a
   * dispute, you can set the `status` to **submitted** or **closed**.
   *
   * Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**,
   * **secondPresentment**.
   */
  status?: DisputeStatus1;
  /** The unique reference of the transaction for which you are raising the dispute. */
  transactionId: string;
  /**
   * The type of the dispute.
   *
   * Possible values: **duplicate**, **fraud**, **notDelivered**, **other**.
   *
   * **Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit
   * any disputes for this dispute `type` at this time.
   */
  type: string;
};

export const disputeRequestSchema: Schema<DisputeRequest> = s.object<DisputeRequest>({
  description: s.optional(s.string()),
  disputedAmount: s.optional(s.lazy(() => amount17Schema)),
  duplicateInfo: s.optional(s.lazy(() => duplicateInfo1Schema)),
  fraudInfo: s.optional(s.lazy(() => fraudInfo1Schema)),
  notDeliveredInfo: s.optional(s.lazy(() => notDeliveredInfo1Schema)),
  otherInfo: s.optional(s.lazy(() => otherInfo3Schema)),
  status: s.optional(s.lazy(() => disputeStatus1Schema)),
  transactionId: s.string(),
  type: s.string(),
});
