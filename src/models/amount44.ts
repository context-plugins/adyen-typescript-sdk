import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount44 = {
  currency: string;
  value: number;
};

export const amount44Schema: Schema<Amount44> = s.object<Amount44>({
  currency: s.string(),
  value: s.number(),
});
