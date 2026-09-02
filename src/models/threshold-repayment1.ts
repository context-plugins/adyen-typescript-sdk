import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type ThresholdRepayment1 = {
  amount: Amount17;
};

export const thresholdRepayment1Schema: Schema<ThresholdRepayment1> = s.object<ThresholdRepayment1>({
  amount: amount17Schema,
});
