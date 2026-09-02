import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount19 = {
  currency: string;
  value: number;
};

export const amount19Schema: Schema<Amount19> = s.object<Amount19>({
  currency: s.string(),
  value: s.number(),
});
