import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standalone = {
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

export const standaloneSchema: Schema<Standalone> = s.object<Standalone>({
  currencyCode: s.optional(s.string()),
  enableGratuities: s.optional(s.boolean()),
  enableStandalone: s.optional(s.boolean()),
});
