import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MerchantDetails2 = {
  countryCode?: string;
  enrolledIn3DSecure?: boolean;
  mcc?: string;
};

export const merchantDetails2Schema: Schema<MerchantDetails2> = s.object<MerchantDetails2>({
  countryCode: s.optional(s.string()),
  enrolledIn3DSecure: s.optional(s.boolean()),
  mcc: s.optional(s.string()),
});
