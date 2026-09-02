import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount46 = {
  currency: string;
  value: number;
};

export const amount46Schema: Schema<Amount46> = s.object<Amount46>({
  currency: s.string(),
  value: s.number(),
});
