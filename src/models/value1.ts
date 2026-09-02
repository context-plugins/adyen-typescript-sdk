import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Value1 = {
  Friday: "friday",
  Monday: "monday",
  Saturday: "saturday",
  Sunday: "sunday",
  Thursday: "thursday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
} as const;
export type Value1 = (typeof Value1)[keyof typeof Value1] | (string & {});

export const value1Schema: EnumSchema<Value1> = s.enumOf<Value1>(Value1);
