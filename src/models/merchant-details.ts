import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MerchantDetails = {
  countryCode?: string;
  enrolledIn3DSecure?: boolean;
  mcc?: string;
};

export const merchantDetailsSchema: Schema<MerchantDetails> = s.object<MerchantDetails>({
  countryCode: s.optional(s.string()),
  enrolledIn3DSecure: s.optional(s.boolean()),
  mcc: s.optional(s.string()),
});
