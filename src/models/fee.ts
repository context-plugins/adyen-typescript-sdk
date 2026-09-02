import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type Fee = {
  amount: Amount17;
};

export const feeSchema: Schema<Fee> = s.object<Fee>({
  amount: amount17Schema,
});
