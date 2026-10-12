import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the store. Possible values are:
 *
 * - **active**. This value is assigned automatically when a store is created.
 * - **inactive**. The terminals under the store are blocked from accepting new transactions, but
 *   capturing outstanding transactions is still possible.
 * - **closed**. This status is irreversible. The terminals under the store are reassigned to the
 *   merchant inventory.
 */
export const Status11 = {
  Active: "active",
  Closed: "closed",
  Inactive: "inactive",
} as const;
export type Status11 = (typeof Status11)[keyof typeof Status11] | (string & {});

export const status11Schema: EnumSchema<Status11> = s.enumOf<Status11>(Status11);
