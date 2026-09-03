import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status11 = {
  Active: "active",
  Closed: "closed",
  Inactive: "inactive",
} as const;
export type Status11 = (typeof Status11)[keyof typeof Status11] | (string & {});

export const status11Schema: EnumSchema<Status11> = s.enumOf<Status11>(Status11);
