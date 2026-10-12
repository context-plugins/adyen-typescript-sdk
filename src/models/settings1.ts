import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** General Wi-Fi settings. */
export type Settings1 = {
  /**
   * The preferred Wi-Fi band, for use if the terminals support multiple bands. Possible values:
   * All, 2.4GHz, 5GHz.
   */
  band?: string;
  /** Indicates whether roaming is enabled on the terminals. */
  roaming?: boolean;
  /** The connection time-out in seconds. Minimum value: 0. */
  timeout?: number;
};

export const settings1Schema: Schema<Settings1> = s.object<Settings1>({
  band: s.optional(s.string()),
  roaming: s.optional(s.boolean()),
  timeout: s.optional(s.int()),
});
