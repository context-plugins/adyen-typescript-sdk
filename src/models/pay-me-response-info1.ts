import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayMeResponseInfo1 = {
  displayName?: string;
  logo?: string;
  supportEmail?: string;
};

export const payMeResponseInfo1Schema: Schema<PayMeResponseInfo1> = s.object<PayMeResponseInfo1>({
  displayName: s.optional(s.string()),
  logo: s.optional(s.string()),
  supportEmail: s.optional(s.string()),
});
