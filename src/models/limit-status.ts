import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the transfer limit. Possible values:
 * * **active**: the limit is currently active.
 * * **inactive**: the limit is currently inactive.
 * * **pendingSCA**: the limit is pending until your user performs SCA.
 * * **scheduled**: the limit is scheduled to become active at a future date.
 */
export const LimitStatus = {
  Active: "active",
  Inactive: "inactive",
  PendingSca: "pendingSCA",
  Scheduled: "scheduled",
} as const;
export type LimitStatus = (typeof LimitStatus)[keyof typeof LimitStatus] | (string & {});

export const limitStatusSchema: EnumSchema<LimitStatus> = s.enumOf<LimitStatus>(LimitStatus);
