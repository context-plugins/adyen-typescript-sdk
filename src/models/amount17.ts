import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount17 = {
  currency: string;
  value: number;
};

export const amount17Schema: Schema<Amount17> = s.object<Amount17>({
  currency: s.string(),
  value: s.number(),
});
