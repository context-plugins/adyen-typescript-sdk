import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Speed with which payouts for this account are processed. Permitted values: `STANDARD`,
 * `SAME_DAY`.
 */
export const PayoutSpeed = {
  Instant: "INSTANT",
  SameDay: "SAME_DAY",
  Standard: "STANDARD",
} as const;
export type PayoutSpeed = (typeof PayoutSpeed)[keyof typeof PayoutSpeed] | (string & {});

export const payoutSpeedSchema: EnumSchema<PayoutSpeed> = s.enumOf<PayoutSpeed>(PayoutSpeed);
