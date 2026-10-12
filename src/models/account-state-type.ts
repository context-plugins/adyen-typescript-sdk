import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state required for the account holder. > Permitted values: `Processing`, `Payout`. */
export const AccountStateType = {
  LimitedPayout: "LimitedPayout",
  LimitedProcessing: "LimitedProcessing",
  LimitlessPayout: "LimitlessPayout",
  LimitlessProcessing: "LimitlessProcessing",
  Payout: "Payout",
  Processing: "Processing",
} as const;
export type AccountStateType = (typeof AccountStateType)[keyof typeof AccountStateType] | (string & {});

export const accountStateTypeSchema: EnumSchema<AccountStateType> =
  s.enumOf<AccountStateType>(AccountStateType);
