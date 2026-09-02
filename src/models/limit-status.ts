import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LimitStatus = {
  Active: "active",
  Inactive: "inactive",
  PendingSca: "pendingSCA",
  Scheduled: "scheduled",
} as const;
export type LimitStatus = (typeof LimitStatus)[keyof typeof LimitStatus] | (string & {});

export const limitStatusSchema: EnumSchema<LimitStatus> = s.enumOf<LimitStatus>(LimitStatus);
