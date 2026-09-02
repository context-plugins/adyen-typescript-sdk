import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VippsResponseInfo2 = {
  logo?: string;
  subscriptionCancelUrl?: string;
};

export const vippsResponseInfo2Schema: Schema<VippsResponseInfo2> = s.object<VippsResponseInfo2>({
  logo: s.optional(s.string()),
  subscriptionCancelUrl: s.optional(s.string()),
});
