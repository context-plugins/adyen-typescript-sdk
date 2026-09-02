import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount6 = {
  currency: string;
  value: number;
};

export const amount6Schema: Schema<Amount6> = s.object<Amount6>({
  currency: s.string(),
  value: s.number(),
});
