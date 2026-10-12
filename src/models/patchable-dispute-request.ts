import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeStatusSchema, type DisputeStatus } from "./dispute-status.js";
import { patchableDuplicateInfoSchema, type PatchableDuplicateInfo } from "./patchable-duplicate-info.js";
import { patchableFraudInfoSchema, type PatchableFraudInfo } from "./patchable-fraud-info.js";
import {
  patchableNotDeliveredInfoSchema,
  type PatchableNotDeliveredInfo,
} from "./patchable-not-delivered-info.js";
import { patchableOtherInfoSchema, type PatchableOtherInfo } from "./patchable-other-info.js";

export type PatchableDisputeRequest = {
  /**
   * Additional information for raising a dispute of `type` **duplicate**. Required for disputes of
   * `type` **duplicate**.
   */
  duplicateInfo?: PatchableDuplicateInfo | null;
  /**
   * Additional information for raising a dispute of `type` **fraud**. Required for disputes of
   * `type` **fraud**.
   */
  fraudInfo?: PatchableFraudInfo | null;
  /**
   * Additional information for raising a dispute of `type` **notDelivered**. Required for disputes
   * of `type` **notDelivered**.
   */
  notDeliveredInfo?: PatchableNotDeliveredInfo | null;
  /**
   * Additional information for raising a dispute of `type` **other**. Required for disputes of
   * `type` **other**.
   *
   * **Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit
   * any disputes for this dispute `type` at this time.
   */
  otherInfo?: PatchableOtherInfo | null;
  /**
   * The current status of the dispute.
   *
   * When you create a dispute, you can only set the `status` to **draft**. When you update a
   * dispute, you can set the `status` to **submitted** or **closed**.
   *
   * Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**,
   * **secondPresentment**.
   */
  status?: DisputeStatus | null;
};

export const patchableDisputeRequestSchema: Schema<PatchableDisputeRequest> =
  s.object<PatchableDisputeRequest>({
    duplicateInfo: s.optionalNullable(s.lazy(() => patchableDuplicateInfoSchema)),
    fraudInfo: s.optionalNullable(s.lazy(() => patchableFraudInfoSchema)),
    notDeliveredInfo: s.optionalNullable(s.lazy(() => patchableNotDeliveredInfoSchema)),
    otherInfo: s.optionalNullable(s.lazy(() => patchableOtherInfoSchema)),
    status: s.optionalNullable(s.lazy(() => disputeStatusSchema)),
  });
