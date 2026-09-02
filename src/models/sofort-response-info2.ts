import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SofortResponseInfo2 = {
  currencyCode?: string;
  logo?: string;
};

export const sofortResponseInfo2Schema: Schema<SofortResponseInfo2> = s.object<SofortResponseInfo2>({
  currencyCode: s.optional(s.string()),
  logo: s.optional(s.string()),
});
