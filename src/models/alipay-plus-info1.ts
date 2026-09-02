import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AlipayPlusInfo1 = {
  settlementCurrencyCode?: string;
};

export const alipayPlusInfo1Schema: Schema<AlipayPlusInfo1> = s.object<AlipayPlusInfo1>({
  settlementCurrencyCode: s.optional(s.string()),
});
