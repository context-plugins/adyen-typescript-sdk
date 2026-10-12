import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Timeouts = {
  /**
   * Indicates the number of seconds of inactivity after which the terminal display goes into sleep
   * mode.
   */
  fromActiveToSleep?: number;
};

export const timeoutsSchema: Schema<Timeouts> = s.object<Timeouts>({
  fromActiveToSleep: s.optional(s.int()),
});
