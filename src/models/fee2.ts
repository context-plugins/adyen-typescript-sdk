import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type Fee2 = {
  /** Contains the amount of the grant fee. */
  amount: Amount17;
};

export const fee2Schema: Schema<Fee2> = s.object<Fee2>({
  amount: amount17Schema,
});
