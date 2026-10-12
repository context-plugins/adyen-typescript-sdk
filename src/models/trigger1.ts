import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { schedule21Schema, type Schedule21 } from "./schedule21.js";

/**
 * The condition that triggers the top-up. This can be a recurring schedule or a minimum balance
 * threshold.
 */
export type Trigger1 = {
  /** Contains the details about the schedule that determines when the top up is executed. */
  schedule?: Schedule21;
  /**
   * The balance threshold that triggers the top-up. If the balance falls below this amount, a
   * top-up is initiated.
   */
  threshold: Amount17;
};

export const trigger1Schema: Schema<Trigger1> = s.object<Trigger1>({
  schedule: s.optional(s.lazy(() => schedule21Schema)),
  threshold: amount17Schema,
});
