import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **googlepay** details */
export type GooglePayResponseInfo1 = {
  /** Google Pay [Merchant ID] */
  merchantId?: string;
  /** Indicates whether the Google Pay Merchant ID is used for several merchant accounts. */
  reuseMerchantId?: boolean;
};

export const googlePayResponseInfo1Schema: Schema<GooglePayResponseInfo1> = s.object<GooglePayResponseInfo1>({
  merchantId: s.optional(s.string()),
  reuseMerchantId: s.optional(s.boolean()),
});
