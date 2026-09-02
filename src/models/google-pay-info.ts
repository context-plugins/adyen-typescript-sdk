import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePayInfo = {
  merchantId: string;
  reuseMerchantId?: boolean;
};

export const googlePayInfoSchema: Schema<GooglePayInfo> = s.object<GooglePayInfo>({
  merchantId: s.string(),
  reuseMerchantId: s.optional(s.boolean()),
});
