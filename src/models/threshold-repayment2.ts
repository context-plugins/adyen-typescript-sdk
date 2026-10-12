import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

/** An object containing the details of the 30-day repayment threshold. */
export type ThresholdRepayment2 = {
  /** The amount to be repaid on a 30-day basis. */
  amount: Amount17;
};

export const thresholdRepayment2Schema: Schema<ThresholdRepayment2> = s.object<ThresholdRepayment2>({
  amount: amount17Schema,
});
