import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount18 = {
  currency: string;
  value: number;
};

export const amount18Schema: Schema<Amount18> = s.object<Amount18>({
  currency: s.string(),
  value: s.number(),
});
