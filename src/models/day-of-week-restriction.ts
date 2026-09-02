import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value1Schema, type Value1 } from "./value1.js";

export type DayOfWeekRestriction = {
  operation: string;
  value?: Value1[];
};

export const dayOfWeekRestrictionSchema: Schema<DayOfWeekRestriction> = s.object<DayOfWeekRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => value1Schema))),
});
