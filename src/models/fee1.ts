import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type Fee1 = {
  amount: Amount17;
};

export const fee1Schema: Schema<Fee1> = s.object<Fee1>({
  amount: amount17Schema,
});
