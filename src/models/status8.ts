import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the store. Possible values: **Pending**, **Active**, **Inactive**,
 * **InactiveWithModifications**, **Closed**.
 */
export const Status8 = {
  Active: "Active",
  Closed: "Closed",
  Inactive: "Inactive",
  InactiveWithModifications: "InactiveWithModifications",
  Pending: "Pending",
} as const;
export type Status8 = (typeof Status8)[keyof typeof Status8] | (string & {});

export const status8Schema: EnumSchema<Status8> = s.enumOf<Status8>(Status8);
