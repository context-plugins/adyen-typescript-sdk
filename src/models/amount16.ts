import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount16 = {
  currency: string;
  value: number;
};

export const amount16Schema: Schema<Amount16> = s.object<Amount16>({
  currency: s.string(),
  value: s.number(),
});
