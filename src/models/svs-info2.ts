import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **svs**. */
export type SvsInfo2 = {
  /** The merchant ID (MID) that the acquirer recognizes you by. */
  authorisationMid: string;
  /**
   * The three-character ISO currency code, example **USD**
   */
  currencyCode: string;
};

export const svsInfo2Schema: Schema<SvsInfo2> = s.object<SvsInfo2>({
  authorisationMid: s.string(),
  currencyCode: s.string(),
});
