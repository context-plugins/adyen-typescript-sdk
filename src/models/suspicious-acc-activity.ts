import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the 3DS Requestor has experienced suspicious activity (including previous
 * fraud) on the cardholder account. Allowed values:
 * * **01** — No suspicious activity has been observed
 * * **02** — Suspicious activity has been observed
 */
export const SuspiciousAccActivity = {
  _01: "01",
  _02: "02",
} as const;
export type SuspiciousAccActivity =
  | (typeof SuspiciousAccActivity)[keyof typeof SuspiciousAccActivity]
  | (string & {});

export const suspiciousAccActivitySchema: EnumSchema<SuspiciousAccActivity> =
  s.enumOf<SuspiciousAccActivity>(SuspiciousAccActivity);
