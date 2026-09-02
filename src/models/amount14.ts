import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount14 = {
  currency: string;
  value: number;
};

export const amount14Schema: Schema<Amount14> = s.object<Amount14>({
  currency: s.string(),
  value: s.number(),
});
