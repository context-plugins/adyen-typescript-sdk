import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount23 = {
  currency: string;
  value: number;
};

export const amount23Schema: Schema<Amount23> = s.object<Amount23>({
  currency: s.string(),
  value: s.number(),
});
