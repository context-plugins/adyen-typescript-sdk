import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { disputeStatus1Schema, type DisputeStatus1 } from "./dispute-status1.js";
import { duplicateInfo1Schema, type DuplicateInfo1 } from "./duplicate-info1.js";
import { fraudInfo1Schema, type FraudInfo1 } from "./fraud-info1.js";
import { notDeliveredInfo1Schema, type NotDeliveredInfo1 } from "./not-delivered-info1.js";
import { otherInfo3Schema, type OtherInfo3 } from "./other-info3.js";

export type DisputeRequest = {
  description?: string;
  disputedAmount?: Amount17;
  duplicateInfo?: DuplicateInfo1;
  fraudInfo?: FraudInfo1;
  notDeliveredInfo?: NotDeliveredInfo1;
  otherInfo?: OtherInfo3;
  status?: DisputeStatus1;
  transactionId: string;
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
