import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount42 = {
  currency: string;
  value: number;
};

export const amount42Schema: Schema<Amount42> = s.object<Amount42>({
  currency: s.string(),
  value: s.number(),
});
