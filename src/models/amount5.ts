import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount5 = {
  currency: string;
  value: number;
};

export const amount5Schema: Schema<Amount5> = s.object<Amount5>({
  currency: s.string(),
  value: s.number(),
});
