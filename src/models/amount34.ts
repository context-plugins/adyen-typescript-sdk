import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount34 = {
  currency: string;
  value: number;
};

export const amount34Schema: Schema<Amount34> = s.object<Amount34>({
  currency: s.string(),
  value: s.number(),
});
