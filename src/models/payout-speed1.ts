import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Speed at which payouts for this account are processed.
 *
 * Possible values: `STANDARD` (default), `SAME_DAY`.
 */
export const PayoutSpeed1 = {
  Instant: "INSTANT",
  SameDay: "SAME_DAY",
  Standard: "STANDARD",
} as const;
export type PayoutSpeed1 = (typeof PayoutSpeed1)[keyof typeof PayoutSpeed1] | (string & {});

export const payoutSpeed1Schema: EnumSchema<PayoutSpeed1> = s.enumOf<PayoutSpeed1>(PayoutSpeed1);
