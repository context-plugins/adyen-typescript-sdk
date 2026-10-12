import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The type of card for which the terminal accepts store-and-forward payments. You can specify
 * multiple card types.
 */
export type SupportedCardTypes2 = {
  /** Set to **true** to accept credit cards. */
  credit?: boolean;
  /** Set to **true** to accept debit cards. */
  debit?: boolean;
  /** Set to **true** to accept cards that allow deferred debit. */
  deferredDebit?: boolean;
  /** Set to **true** to accept prepaid cards. */
  prepaid?: boolean;
  /**
   * Set to **true** to accept card types for which the terminal can't determine the funding source
   * while offline.
   */
  unknown?: boolean;
};

export const supportedCardTypes2Schema: Schema<SupportedCardTypes2> = s.object<SupportedCardTypes2>({
  credit: s.optional(s.boolean()),
  debit: s.optional(s.boolean()),
  deferredDebit: s.optional(s.boolean()),
  prepaid: s.optional(s.boolean()),
  unknown: s.optional(s.boolean()),
});
