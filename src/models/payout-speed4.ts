import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Speed at which payouts for this account are processed.
 *
 * Possible values: `STANDARD`, `SAME_DAY`.
 */
export const PayoutSpeed4 = {
  Instant: "INSTANT",
  SameDay: "SAME_DAY",
  Standard: "STANDARD",
} as const;
export type PayoutSpeed4 = (typeof PayoutSpeed4)[keyof typeof PayoutSpeed4] | (string & {});

export const payoutSpeed4Schema: EnumSchema<PayoutSpeed4> = s.enumOf<PayoutSpeed4>(PayoutSpeed4);
