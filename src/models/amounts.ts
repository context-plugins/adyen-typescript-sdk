import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amounts = {
  currency: string;
  values: number[];
};

export const amountsSchema: Schema<Amounts> = s.object<Amounts>({
  currency: s.string(),
  values: s.array(s.number()),
});
