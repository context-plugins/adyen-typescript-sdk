import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state to be updated. >Permitted values are: `Processing`, `Payout` */
export const StateType = {
  LimitedPayout: "LimitedPayout",
  LimitedProcessing: "LimitedProcessing",
  LimitlessPayout: "LimitlessPayout",
  LimitlessProcessing: "LimitlessProcessing",
  Payout: "Payout",
  Processing: "Processing",
} as const;
export type StateType = (typeof StateType)[keyof typeof StateType] | (string & {});

export const stateTypeSchema: EnumSchema<StateType> = s.enumOf<StateType>(StateType);
