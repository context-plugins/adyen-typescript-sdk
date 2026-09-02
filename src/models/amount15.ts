import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount15 = {
  currency: string;
  value: number;
};

export const amount15Schema: Schema<Amount15> = s.object<Amount15>({
  currency: s.string(),
  value: s.number(),
});
