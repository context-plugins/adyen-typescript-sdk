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
  duplicateInfo?: PatchableDuplicateInfo | null;
  fraudInfo?: PatchableFraudInfo | null;
  notDeliveredInfo?: PatchableNotDeliveredInfo | null;
  otherInfo?: PatchableOtherInfo | null;
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
