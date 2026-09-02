import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount12 = {
  currency: string;
  value: number;
};

export const amount12Schema: Schema<Amount12> = s.object<Amount12>({
  currency: s.string(),
  value: s.number(),
});
