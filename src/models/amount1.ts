import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount1 = {
  currency: string;
  value: number;
};

export const amount1Schema: Schema<Amount1> = s.object<Amount1>({
  currency: s.string(),
  value: s.number(),
});
