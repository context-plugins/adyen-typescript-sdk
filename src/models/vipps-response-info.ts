import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VippsResponseInfo = {
  logo?: string;
  subscriptionCancelUrl?: string;
};

export const vippsResponseInfoSchema: Schema<VippsResponseInfo> = s.object<VippsResponseInfo>({
  logo: s.optional(s.string()),
  subscriptionCancelUrl: s.optional(s.string()),
});
