import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount20 = {
  currency: string;
  value: number;
};

export const amount20Schema: Schema<Amount20> = s.object<Amount20>({
  currency: s.string(),
  value: s.number(),
});
