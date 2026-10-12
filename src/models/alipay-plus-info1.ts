import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **alipay_plus**. */
export type AlipayPlusInfo1 = {
  /** The currency used for settlement. Defaults to USD. */
  settlementCurrencyCode?: string;
};

export const alipayPlusInfo1Schema: Schema<AlipayPlusInfo1> = s.object<AlipayPlusInfo1>({
  settlementCurrencyCode: s.optional(s.string()),
});
