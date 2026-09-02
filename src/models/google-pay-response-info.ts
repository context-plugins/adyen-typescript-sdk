import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePayResponseInfo = {
  merchantId?: string;
  reuseMerchantId?: boolean;
};

export const googlePayResponseInfoSchema: Schema<GooglePayResponseInfo> = s.object<GooglePayResponseInfo>({
  merchantId: s.optional(s.string()),
  reuseMerchantId: s.optional(s.boolean()),
});
