import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VippsInfo2 = {
  logo: string;
  subscriptionCancelUrl?: string;
};

export const vippsInfo2Schema: Schema<VippsInfo2> = s.object<VippsInfo2>({
  logo: s.string(),
  subscriptionCancelUrl: s.optional(s.string()),
});
