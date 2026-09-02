import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount4 = {
  currency: string;
  value: number;
};

export const amount4Schema: Schema<Amount4> = s.object<Amount4>({
  currency: s.string(),
  value: s.number(),
});
