import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount38 = {
  currency: string;
  value: number;
};

export const amount38Schema: Schema<Amount38> = s.object<Amount38>({
  currency: s.string(),
  value: s.number(),
});
