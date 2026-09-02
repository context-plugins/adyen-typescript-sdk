import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount7 = {
  currency: string;
  value: number;
};

export const amount7Schema: Schema<Amount7> = s.object<Amount7>({
  currency: s.string(),
  value: s.number(),
});
