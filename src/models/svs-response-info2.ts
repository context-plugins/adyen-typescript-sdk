import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SvsResponseInfo2 = {
  authorisationMid?: string;
  currencyCode?: string;
};

export const svsResponseInfo2Schema: Schema<SvsResponseInfo2> = s.object<SvsResponseInfo2>({
  authorisationMid: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
});
