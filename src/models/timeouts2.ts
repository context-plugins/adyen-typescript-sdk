import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Settings for device
 * [time-outs](https://docs.adyen.com/point-of-sale/pos-timeouts#device-time-out).
 */
export type Timeouts2 = {
  /**
   * Indicates the number of seconds of inactivity after which the terminal display goes into sleep
   * mode.
   */
  fromActiveToSleep?: number;
};

export const timeouts2Schema: Schema<Timeouts2> = s.object<Timeouts2>({
  fromActiveToSleep: s.optional(s.int()),
});
