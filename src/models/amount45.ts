import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount45 = {
  currency: string;
  value: number;
};

export const amount45Schema: Schema<Amount45> = s.object<Amount45>({
  currency: s.string(),
  value: s.number(),
});
