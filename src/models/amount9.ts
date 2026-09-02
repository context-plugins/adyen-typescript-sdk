import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount9 = {
  currency: string;
  value: number;
};

export const amount9Schema: Schema<Amount9> = s.object<Amount9>({
  currency: s.string(),
  value: s.number(),
});
