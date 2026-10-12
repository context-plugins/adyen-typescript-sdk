import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the network token. Possible values: **active**, **inactive**, **suspended**,
 * **closed**.
 */
export const Status91 = {
  Active: "active",
  Inactive: "inactive",
  Suspended: "suspended",
  Closed: "closed",
} as const;
export type Status91 = (typeof Status91)[keyof typeof Status91] | (string & {});

export const status91Schema: EnumSchema<Status91> = s.enumOf<Status91>(Status91);
