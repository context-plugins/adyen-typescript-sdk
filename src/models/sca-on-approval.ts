import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Shows the status of the Strong Customer Authentication (SCA) process.
 *
 * Possible values: **required**, **notApplicable**.
 */
export const ScaOnApproval = {
  Completed: "completed",
  NotApplicable: "notApplicable",
  Required: "required",
} as const;
export type ScaOnApproval = (typeof ScaOnApproval)[keyof typeof ScaOnApproval] | (string & {});

export const scaOnApprovalSchema: EnumSchema<ScaOnApproval> = s.enumOf<ScaOnApproval>(ScaOnApproval);
