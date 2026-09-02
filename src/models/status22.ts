import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status22 = {
  Active: "Active",
  Closed: "Closed",
  Inactive: "Inactive",
  Suspended: "Suspended",
} as const;
export type Status22 = (typeof Status22)[keyof typeof Status22] | (string & {});

export const status22Schema: EnumSchema<Status22> = s.enumOf<Status22>(Status22);
