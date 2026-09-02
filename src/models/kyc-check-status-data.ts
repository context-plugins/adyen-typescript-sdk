import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckSummary2Schema, type KycCheckSummary2 } from "./kyc-check-summary2.js";
import { status32Schema, type Status32 } from "./status32.js";
import { type211Schema, type Type211 } from "./type211.js";

export type KycCheckStatusData = {
  requiredFields?: string[];
  status: Status32;
  summary?: KycCheckSummary2;
  type: Type211;
};

export const kycCheckStatusDataSchema: Schema<KycCheckStatusData> = s.object<KycCheckStatusData>({
  requiredFields: s.optional(s.array(s.string())),
  status: status32Schema,
  summary: s.optional(s.lazy(() => kycCheckSummary2Schema)),
  type: type211Schema,
});
