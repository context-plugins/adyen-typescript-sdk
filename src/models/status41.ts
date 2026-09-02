import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status41 = {
  Active: "active",
  Closed: "closed",
  Inactive: "inactive",
} as const;
export type Status41 = (typeof Status41)[keyof typeof Status41] | (string & {});

export const status41Schema: EnumSchema<Status41> = s.enumOf<Status41>(Status41);
