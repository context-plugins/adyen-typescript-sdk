import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount32 = {
  currency: string;
  value: number;
};

export const amount32Schema: Schema<Amount32> = s.object<Amount32>({
  currency: s.string(),
  value: s.number(),
});
