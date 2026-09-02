import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount26 = {
  currency: string;
  value: number;
};

export const amount26Schema: Schema<Amount26> = s.object<Amount26>({
  currency: s.string(),
  value: s.number(),
});
