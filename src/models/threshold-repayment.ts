import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type ThresholdRepayment = {
  /** The amount to be repaid on a 30-day basis. */
  amount: Amount17;
};

export const thresholdRepaymentSchema: Schema<ThresholdRepayment> = s.object<ThresholdRepayment>({
  amount: amount17Schema,
});
