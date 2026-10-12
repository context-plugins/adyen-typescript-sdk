import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AlipayPlusResponseInfo = {
  /** The currency used for settlement. */
  settlementCurrencyCode?: string;
};

export const alipayPlusResponseInfoSchema: Schema<AlipayPlusResponseInfo> = s.object<AlipayPlusResponseInfo>({
  settlementCurrencyCode: s.optional(s.string()),
});
