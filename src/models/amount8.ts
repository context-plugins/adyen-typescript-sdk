import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount8 = {
  currency: string;
  value: number;
};

export const amount8Schema: Schema<Amount8> = s.object<Amount8>({
  currency: s.string(),
  value: s.number(),
});
