import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SvsResponseInfo = {
  authorisationMid?: string;
  currencyCode?: string;
};

export const svsResponseInfoSchema: Schema<SvsResponseInfo> = s.object<SvsResponseInfo>({
  authorisationMid: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
});
