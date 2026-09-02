import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount110 = {
  currency: string;
  value: number;
};

export const amount110Schema: Schema<Amount110> = s.object<Amount110>({
  currency: s.string(),
  value: s.number(),
});
