import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount35 = {
  currency: string;
  value: number;
};

export const amount35Schema: Schema<Amount35> = s.object<Amount35>({
  currency: s.string(),
  value: s.number(),
});
