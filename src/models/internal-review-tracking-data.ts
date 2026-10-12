import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason11Schema, type Reason11 } from "./reason11.js";
import { status44Schema, type Status44 } from "./status44.js";

export type InternalReviewTrackingData = {
  /**
   * The reason why the transfer failed Adyen's internal review.
   *
   * Possible values:
   *
   * - **refusedForRegulatoryReasons**: the transfer does not comply with Adyen's risk policy. For
   *   more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new).
   */
  reason?: Reason11;
  /**
   * The status of the transfer.
   *
   * Possible values:
   *
   *  - **pending**: the transfer is under internal review by Adyen.
   *
   * - **failed**: the transfer failed Adyen's internal review. For details, see `reason`.
   */
  status: Status44;
  /**
   * The type of tracking event.
   *
   * Possible values:
   *
   *  - **internalReview**: the transfer was flagged because it does not comply with Adyen's risk
   *    policy.
   *
   * @default "internalReview"
   */
  type?: "internalReview";
};

export const internalReviewTrackingDataSchema: Schema<InternalReviewTrackingData> =
  s.object<InternalReviewTrackingData>({
    reason: s.optional(s.lazy(() => reason11Schema)),
    status: status44Schema,
    type: s.defaulted(s.literal("internalReview"), "internalReview"),
  });
