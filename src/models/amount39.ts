import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount39 = {
  currency: string;
  value: number;
};

export const amount39Schema: Schema<Amount39> = s.object<Amount39>({
  currency: s.string(),
  value: s.number(),
});
