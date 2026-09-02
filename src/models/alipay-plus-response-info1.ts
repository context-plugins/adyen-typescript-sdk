import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AlipayPlusResponseInfo1 = {
  settlementCurrencyCode?: string;
};

export const alipayPlusResponseInfo1Schema: Schema<AlipayPlusResponseInfo1> =
  s.object<AlipayPlusResponseInfo1>({
    settlementCurrencyCode: s.optional(s.string()),
  });
