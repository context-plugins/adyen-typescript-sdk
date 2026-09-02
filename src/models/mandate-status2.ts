import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MandateStatus2 = {
  Pending: "pending",
  Approved: "approved",
  Cancelled: "cancelled",
} as const;
export type MandateStatus2 = (typeof MandateStatus2)[keyof typeof MandateStatus2] | (string & {});

export const mandateStatus2Schema: EnumSchema<MandateStatus2> = s.enumOf<MandateStatus2>(MandateStatus2);
