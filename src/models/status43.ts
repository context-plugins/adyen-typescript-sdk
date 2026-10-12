import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the balance account. Payment instruments linked to the balance account can only be
 * used if the balance account status is **active**.
 *
 * Possible values: **active**, **closed**, **suspended**.
 */
export const Status43 = {
  Active: "active",
  Closed: "closed",
  Inactive: "inactive",
  Suspended: "suspended",
} as const;
export type Status43 = (typeof Status43)[keyof typeof Status43] | (string & {});

export const status43Schema: EnumSchema<Status43> = s.enumOf<Status43>(Status43);
