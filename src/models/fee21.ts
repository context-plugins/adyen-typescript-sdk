import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type Fee21 = {
  amount: Amount17;
};

export const fee21Schema: Schema<Fee21> = s.object<Fee21>({
  amount: amount17Schema,
});
