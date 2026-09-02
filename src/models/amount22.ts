import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount22 = {
  currency: string;
  value: number;
};

export const amount22Schema: Schema<Amount22> = s.object<Amount22>({
  currency: s.string(),
  value: s.number(),
});
