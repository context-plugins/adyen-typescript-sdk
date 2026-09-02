import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount30 = {
  currency: string;
  value: number;
};

export const amount30Schema: Schema<Amount30> = s.object<Amount30>({
  currency: s.string(),
  value: s.number(),
});
