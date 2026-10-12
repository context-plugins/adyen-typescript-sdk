import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for terminal hardware features. */
export type Hardware1 = {
  /** The brightness of the display when the terminal is being used, expressed as a percentage. */
  displayMaximumBackLight?: number;
  /**
   * The hour of the day when the terminal is set to reset the Totals report. By default, the reset
   * hour is at 6:00 AM in the timezone of the terminal. Minimum value: 0, maximum value: 23.
   */
  resetTotalsHour?: number;
  /**
   * The hour of the day when the terminal is set to reboot to apply the configuration and software
   * updates. By default, the restart hour is at 6:00 AM in the timezone of the terminal. Minimum
   * value: 0, maximum value: 23.
   */
  restartHour?: number;
};

export const hardware1Schema: Schema<Hardware1> = s.object<Hardware1>({
  displayMaximumBackLight: s.optional(s.int()),
  resetTotalsHour: s.optional(s.int()),
  restartHour: s.optional(s.int()),
});
