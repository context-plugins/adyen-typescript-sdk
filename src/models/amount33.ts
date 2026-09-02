import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount33 = {
  currency: string;
  value: number;
};

export const amount33Schema: Schema<Amount33> = s.object<Amount33>({
  currency: s.string(),
  value: s.number(),
});
