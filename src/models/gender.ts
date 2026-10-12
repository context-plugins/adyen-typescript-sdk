import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The gender. >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`. */
export const Gender = {
  Male: "MALE",
  Female: "FEMALE",
  Unknown: "UNKNOWN",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender] | (string & {});

export const genderSchema: EnumSchema<Gender> = s.enumOf<Gender>(Gender);
