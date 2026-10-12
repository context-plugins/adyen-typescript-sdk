import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value1Schema, type Value1 } from "./value1.js";

/** List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**. */
export type DayOfWeekRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /**
   * List of days of the week.
   *
   * Possible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**,
   * **saturday**, **sunday**.
   */
  value?: Value1[];
};

export const dayOfWeekRestriction1Schema: Schema<DayOfWeekRestriction1> = s.object<DayOfWeekRestriction1>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => value1Schema))),
});
