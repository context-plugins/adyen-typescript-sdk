import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount11 = {
  currency: string;
  value: number;
};

export const amount11Schema: Schema<Amount11> = s.object<Amount11>({
  currency: s.string(),
  value: s.number(),
});
