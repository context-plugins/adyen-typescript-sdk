import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the account holder.
 *
 * Possible values:
 *
 *  * **active**: The account holder is active and allowed to use its capabilities. This is the
 *    initial status for account holders and balance accounts. You can change this status to
 *    **suspended** or **closed**.
 *
 *  * **suspended**: The account holder is temporarily disabled and payouts are blocked. You can
 *    change this status to **active** or **closed**.
 *
 * * **closed**: The account holder and all of its capabilities are permanently disabled. This is a
 *   final status and cannot be changed.
 */
export const Status9 = {
  Active: "active",
  Closed: "closed",
  Suspended: "suspended",
} as const;
export type Status9 = (typeof Status9)[keyof typeof Status9] | (string & {});

export const status9Schema: EnumSchema<Status9> = s.enumOf<Status9>(Status9);
