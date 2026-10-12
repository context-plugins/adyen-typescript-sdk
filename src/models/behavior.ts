import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method of handling the chargeback.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**,
 * **deductAccordingToSplitRatio**., Specifies how and from which balance account(s) to deduct the
 * chargeback amount.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**,
 * **deductAccordingToSplitRatio**., Specifies how and from which balance account(s) to deduct the
 * refund amount.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**,
 * **deductAccordingToSplitRatio**
 */
export const Behavior = {
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
  DeductAccordingToSplitRatio: "deductAccordingToSplitRatio",
  DeductFromLiableAccount: "deductFromLiableAccount",
} as const;
export type Behavior = (typeof Behavior)[keyof typeof Behavior] | (string & {});

export const behaviorSchema: EnumSchema<Behavior> = s.enumOf<Behavior>(Behavior);
