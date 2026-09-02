import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePayInfo1 = {
  merchantId: string;
  reuseMerchantId?: boolean;
};

export const googlePayInfo1Schema: Schema<GooglePayInfo1> = s.object<GooglePayInfo1>({
  merchantId: s.string(),
  reuseMerchantId: s.optional(s.boolean()),
});
