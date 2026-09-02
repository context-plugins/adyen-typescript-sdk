import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AmountAdjustmentType = {
  AtmMarkup: "atmMarkup",
  AuthHoldReserve: "authHoldReserve",
  Exchange: "exchange",
  ForexMarkup: "forexMarkup",
} as const;
export type AmountAdjustmentType =
  | (typeof AmountAdjustmentType)[keyof typeof AmountAdjustmentType]
  | (string & {});

export const amountAdjustmentTypeSchema: EnumSchema<AmountAdjustmentType> =
  s.enumOf<AmountAdjustmentType>(AmountAdjustmentType);
