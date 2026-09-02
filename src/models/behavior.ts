import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Behavior = {
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
  DeductAccordingToSplitRatio: "deductAccordingToSplitRatio",
  DeductFromLiableAccount: "deductFromLiableAccount",
} as const;
export type Behavior = (typeof Behavior)[keyof typeof Behavior] | (string & {});

export const behaviorSchema: EnumSchema<Behavior> = s.enumOf<Behavior>(Behavior);
