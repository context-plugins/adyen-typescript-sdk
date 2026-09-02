import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amounts1 = {
  currency: string;
  values: number[];
};

export const amounts1Schema: Schema<Amounts1> = s.object<Amounts1>({
  currency: s.string(),
  values: s.array(s.number()),
});
