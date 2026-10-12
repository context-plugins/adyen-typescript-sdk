import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Settings = {
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

export const settingsSchema: Schema<Settings> = s.object<Settings>({
  band: s.optional(s.string()),
  roaming: s.optional(s.boolean()),
  timeout: s.optional(s.int()),
});
