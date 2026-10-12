import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AlipayPlusInfo = {
  /** The currency used for settlement. Defaults to USD. */
  settlementCurrencyCode?: string;
};

export const alipayPlusInfoSchema: Schema<AlipayPlusInfo> = s.object<AlipayPlusInfo>({
  settlementCurrencyCode: s.optional(s.string()),
});
