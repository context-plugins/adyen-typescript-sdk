import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type TotalAmountRestriction1 = {
  operation: string;
  value?: Amount17;
};

export const totalAmountRestriction1Schema: Schema<TotalAmountRestriction1> =
  s.object<TotalAmountRestriction1>({
    operation: s.string(),
    value: s.optional(s.lazy(() => amount17Schema)),
  });
