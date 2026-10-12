import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SvsInfo = {
  /** The merchant ID (MID) that the acquirer recognizes you by. */
  authorisationMid: string;
  /**
   * The three-character ISO currency code, example **USD**
   */
  currencyCode: string;
};

export const svsInfoSchema: Schema<SvsInfo> = s.object<SvsInfo>({
  authorisationMid: s.string(),
  currencyCode: s.string(),
});
