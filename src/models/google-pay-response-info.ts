import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePayResponseInfo = {
  /** Google Pay [Merchant ID] */
  merchantId?: string;
  /** Indicates whether the Google Pay Merchant ID is used for several merchant accounts. */
  reuseMerchantId?: boolean;
};

export const googlePayResponseInfoSchema: Schema<GooglePayResponseInfo> = s.object<GooglePayResponseInfo>({
  merchantId: s.optional(s.string()),
  reuseMerchantId: s.optional(s.boolean()),
});
