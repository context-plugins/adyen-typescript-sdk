import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OutcomeType = {
  EnforceSca: "enforceSCA",
  HardBlock: "hardBlock",
  ScoreBased: "scoreBased",
  TimedBlock: "timedBlock",
} as const;
export type OutcomeType = (typeof OutcomeType)[keyof typeof OutcomeType] | (string & {});

export const outcomeTypeSchema: EnumSchema<OutcomeType> = s.enumOf<OutcomeType>(OutcomeType);
