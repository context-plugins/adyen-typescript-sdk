import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { disputeStatus1Schema, type DisputeStatus1 } from "./dispute-status1.js";
import { duplicateInfo1Schema, type DuplicateInfo1 } from "./duplicate-info1.js";
import { fraudInfo1Schema, type FraudInfo1 } from "./fraud-info1.js";
import { notDeliveredInfo1Schema, type NotDeliveredInfo1 } from "./not-delivered-info1.js";
import { otherInfo1Schema, type OtherInfo1 } from "./other-info1.js";

export type DisputeResponse = {
  arn?: string;
  description?: string;
  disputedAmount?: Amount17;
  duplicateInfo?: DuplicateInfo1;
  fraudInfo?: FraudInfo1;
  id?: string;
  notDeliveredInfo?: NotDeliveredInfo1;
  otherInfo?: OtherInfo1;
  status?: DisputeStatus1;
  transactionId: string;
  type: string;
};

export const disputeResponseSchema: Schema<DisputeResponse> = s.object<DisputeResponse>({
  arn: s.optional(s.string()),
  description: s.optional(s.string()),
  disputedAmount: s.optional(s.lazy(() => amount17Schema)),
  duplicateInfo: s.optional(s.lazy(() => duplicateInfo1Schema)),
  fraudInfo: s.optional(s.lazy(() => fraudInfo1Schema)),
  id: s.optional(s.string()),
  notDeliveredInfo: s.optional(s.lazy(() => notDeliveredInfo1Schema)),
  otherInfo: s.optional(s.lazy(() => otherInfo1Schema)),
  status: s.optional(s.lazy(() => disputeStatus1Schema)),
  transactionId: s.string(),
  type: s.string(),
});
