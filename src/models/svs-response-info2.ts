import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **svs** details */
export type SvsResponseInfo2 = {
  /** The merchant ID (MID) that the acquirer recognizes you by. */
  authorisationMid?: string;
  /**
   * The three-character ISO currency code, example **USD**
   */
  currencyCode?: string;
};

export const svsResponseInfo2Schema: Schema<SvsResponseInfo2> = s.object<SvsResponseInfo2>({
  authorisationMid: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
});
