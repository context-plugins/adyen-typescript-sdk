import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status101 = {
  Active: "active",
  Closed: "closed",
  Inactive: "inactive",
  Suspended: "suspended",
} as const;
export type Status101 = (typeof Status101)[keyof typeof Status101] | (string & {});

export const status101Schema: EnumSchema<Status101> = s.enumOf<Status101>(Status101);
