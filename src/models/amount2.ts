import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount2 = {
  currency: string;
  value: number;
};

export const amount2Schema: Schema<Amount2> = s.object<Amount2>({
  currency: s.string(),
  value: s.number(),
});
