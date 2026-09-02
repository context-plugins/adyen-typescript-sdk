import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type Fee4 = {
  amount: Amount17;
};

export const fee4Schema: Schema<Fee4> = s.object<Fee4>({
  amount: amount17Schema,
});
