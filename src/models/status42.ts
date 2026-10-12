import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the account. >Permitted values: `Active`. */
export const Status42 = {
  Active: "Active",
  Closed: "Closed",
  Inactive: "Inactive",
  Suspended: "Suspended",
} as const;
export type Status42 = (typeof Status42)[keyof typeof Status42] | (string & {});

export const status42Schema: EnumSchema<Status42> = s.enumOf<Status42>(Status42);
