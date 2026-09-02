import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type TotalAmountRestriction = {
  operation: string;
  value?: Amount17;
};

export const totalAmountRestrictionSchema: Schema<TotalAmountRestriction> = s.object<TotalAmountRestriction>({
  operation: s.string(),
  value: s.optional(s.lazy(() => amount17Schema)),
});
