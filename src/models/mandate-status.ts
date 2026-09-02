import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MandateStatus = {
  Pending: "pending",
  Approved: "approved",
  Cancelled: "cancelled",
} as const;
export type MandateStatus = (typeof MandateStatus)[keyof typeof MandateStatus] | (string & {});

export const mandateStatusSchema: EnumSchema<MandateStatus> = s.enumOf<MandateStatus>(MandateStatus);
