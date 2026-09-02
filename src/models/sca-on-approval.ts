import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScaOnApproval = {
  Completed: "completed",
  NotApplicable: "notApplicable",
  Required: "required",
} as const;
export type ScaOnApproval = (typeof ScaOnApproval)[keyof typeof ScaOnApproval] | (string & {});

export const scaOnApprovalSchema: EnumSchema<ScaOnApproval> = s.enumOf<ScaOnApproval>(ScaOnApproval);
