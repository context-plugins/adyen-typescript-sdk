import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SofortResponseInfo = {
  /** Sofort currency code. For example, **EUR**. */
  currencyCode?: string;
  /** Sofort logo. Format: Base64-encoded string. */
  logo?: string;
};

export const sofortResponseInfoSchema: Schema<SofortResponseInfo> = s.object<SofortResponseInfo>({
  currencyCode: s.optional(s.string()),
  logo: s.optional(s.string()),
});
