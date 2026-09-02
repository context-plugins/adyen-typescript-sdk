import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type ThresholdRepayment2 = {
  amount: Amount17;
};

export const thresholdRepayment2Schema: Schema<ThresholdRepayment2> = s.object<ThresholdRepayment2>({
  amount: amount17Schema,
});
