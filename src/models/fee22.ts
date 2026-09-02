import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type Fee22 = {
  amount: Amount17;
};

export const fee22Schema: Schema<Fee22> = s.object<Fee22>({
  amount: amount17Schema,
});
