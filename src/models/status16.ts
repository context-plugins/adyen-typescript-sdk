import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The new status of the network token. Possible values: **active**, **suspended**, **closed**. The
 * **closed** status is final and cannot be changed.
 */
export const Status16 = {
  Active: "active",
  Suspended: "suspended",
  Closed: "closed",
} as const;
export type Status16 = (typeof Status16)[keyof typeof Status16] | (string & {});

export const status16Schema: EnumSchema<Status16> = s.enumOf<Status16>(Status16);
