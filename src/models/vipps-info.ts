import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VippsInfo = {
  logo: string;
  subscriptionCancelUrl?: string;
};

export const vippsInfoSchema: Schema<VippsInfo> = s.object<VippsInfo>({
  logo: s.string(),
  subscriptionCancelUrl: s.optional(s.string()),
});
