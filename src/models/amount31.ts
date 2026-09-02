import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount31 = {
  currency: string;
  value: number;
};

export const amount31Schema: Schema<Amount31> = s.object<Amount31>({
  currency: s.string(),
  value: s.number(),
});
