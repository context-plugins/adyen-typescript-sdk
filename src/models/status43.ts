import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status43 = {
  Active: "active",
  Closed: "closed",
  Inactive: "inactive",
  Suspended: "suspended",
} as const;
export type Status43 = (typeof Status43)[keyof typeof Status43] | (string & {});

export const status43Schema: EnumSchema<Status43> = s.enumOf<Status43>(Status43);
