import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of time. You can only use **minutes** and **hours** if the `interval.type` is
 * **sliding**.
 *
 * Possible values: **minutes**, **hours**, **days**, **weeks**, or **months**
 */
export const Unit = {
  Days: "days",
  Hours: "hours",
  Minutes: "minutes",
  Months: "months",
  Weeks: "weeks",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit] | (string & {});

export const unitSchema: EnumSchema<Unit> = s.enumOf<Unit>(Unit);
