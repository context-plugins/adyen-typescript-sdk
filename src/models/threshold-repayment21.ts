import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type ThresholdRepayment21 = {
  amount: Amount17;
};

export const thresholdRepayment21Schema: Schema<ThresholdRepayment21> = s.object<ThresholdRepayment21>({
  amount: amount17Schema,
});
