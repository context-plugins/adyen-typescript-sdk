import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePayResponseInfo1 = {
  merchantId?: string;
  reuseMerchantId?: boolean;
};

export const googlePayResponseInfo1Schema: Schema<GooglePayResponseInfo1> = s.object<GooglePayResponseInfo1>({
  merchantId: s.optional(s.string()),
  reuseMerchantId: s.optional(s.boolean()),
});
