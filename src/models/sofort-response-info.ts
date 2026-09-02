import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SofortResponseInfo = {
  currencyCode?: string;
  logo?: string;
};

export const sofortResponseInfoSchema: Schema<SofortResponseInfo> = s.object<SofortResponseInfo>({
  currencyCode: s.optional(s.string()),
  logo: s.optional(s.string()),
});
