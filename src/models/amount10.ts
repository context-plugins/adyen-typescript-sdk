import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount10 = {
  currency: string;
  value: number;
};

export const amount10Schema: Schema<Amount10> = s.object<Amount10>({
  currency: s.string(),
  value: s.number(),
});
