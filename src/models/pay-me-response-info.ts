import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayMeResponseInfo = {
  displayName?: string;
  logo?: string;
  supportEmail?: string;
};

export const payMeResponseInfoSchema: Schema<PayMeResponseInfo> = s.object<PayMeResponseInfo>({
  displayName: s.optional(s.string()),
  logo: s.optional(s.string()),
  supportEmail: s.optional(s.string()),
});
