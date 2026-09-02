import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Priority2 = {
  CrossBorder: "crossBorder",
  Fast: "fast",
  Instant: "instant",
  Internal: "internal",
  Regular: "regular",
  Wire: "wire",
} as const;
export type Priority2 = (typeof Priority2)[keyof typeof Priority2] | (string & {});

export const priority2Schema: EnumSchema<Priority2> = s.enumOf<Priority2>(Priority2);
