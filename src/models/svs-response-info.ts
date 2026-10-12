import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SvsResponseInfo = {
  /** The merchant ID (MID) that the acquirer recognizes you by. */
  authorisationMid?: string;
  /**
   * The three-character ISO currency code, example **USD**
   */
  currencyCode?: string;
};

export const svsResponseInfoSchema: Schema<SvsResponseInfo> = s.object<SvsResponseInfo>({
  authorisationMid: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
});
