import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount13 = {
  currency: string;
  value: number;
};

export const amount13Schema: Schema<Amount13> = s.object<Amount13>({
  currency: s.string(),
  value: s.number(),
});
