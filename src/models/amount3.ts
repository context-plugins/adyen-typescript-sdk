import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount3 = {
  currency: string;
  value: number;
};

export const amount3Schema: Schema<Amount3> = s.object<Amount3>({
  currency: s.string(),
  value: s.number(),
});
