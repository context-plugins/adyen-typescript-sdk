import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Settings for
 * [standalone](https://docs.adyen.com/point-of-sale/standalone/standalone-build/set-up-standalone#set-up-standalone-using-an-api-call)
 * features.
 */
export type Standalone1 = {
  /**
   * The default currency of the standalone payment terminal as an [ISO
   * 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
   */
  currencyCode?: string;
  /**
   * Indicates whether the tipping options specified in `gratuities` are enabled on the standalone
   * terminal.
   */
  enableGratuities?: boolean;
  /** Enable standalone mode. */
  enableStandalone?: boolean;
};

export const standalone1Schema: Schema<Standalone1> = s.object<Standalone1>({
  currencyCode: s.optional(s.string()),
  enableGratuities: s.optional(s.boolean()),
  enableStandalone: s.optional(s.boolean()),
});
