import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SuspiciousAccActivity = {
  _01: "01",
  _02: "02",
} as const;
export type SuspiciousAccActivity =
  | (typeof SuspiciousAccActivity)[keyof typeof SuspiciousAccActivity]
  | (string & {});

export const suspiciousAccActivitySchema: EnumSchema<SuspiciousAccActivity> =
  s.enumOf<SuspiciousAccActivity>(SuspiciousAccActivity);
