import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount43 = {
  currency: string;
  value: number;
};

export const amount43Schema: Schema<Amount43> = s.object<Amount43>({
  currency: s.string(),
  value: s.number(),
});
