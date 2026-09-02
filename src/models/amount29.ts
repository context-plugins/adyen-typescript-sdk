import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount29 = {
  currency: string;
  value: number;
};

export const amount29Schema: Schema<Amount29> = s.object<Amount29>({
  currency: s.string(),
  value: s.number(),
});
