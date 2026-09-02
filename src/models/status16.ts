import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status16 = {
  Active: "active",
  Suspended: "suspended",
  Closed: "closed",
} as const;
export type Status16 = (typeof Status16)[keyof typeof Status16] | (string & {});

export const status16Schema: EnumSchema<Status16> = s.enumOf<Status16>(Status16);
