import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type Duration = {
  /**
   * The unit of time. You can only use **minutes** and **hours** if the `interval.type` is
   * **sliding**.
   *
   * Possible values: **minutes**, **hours**, **days**, **weeks**, or **months**
   */
  unit?: Unit;
  /**
   * The length of time by the unit. For example, 5 days.
   *
   * The maximum duration is 90 days or an equivalent in other units. For example, 3 months.
   */
  value?: number;
};

export const durationSchema: Schema<Duration> = s.object<Duration>({
  unit: s.optional(s.lazy(() => unitSchema)),
  value: s.optional(s.int()),
});
