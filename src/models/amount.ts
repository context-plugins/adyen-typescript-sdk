import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount = {
  currency: string;
  value: number;
};

export const amountSchema: Schema<Amount> = s.object<Amount>({
  currency: s.string(),
  value: s.number(),
});
