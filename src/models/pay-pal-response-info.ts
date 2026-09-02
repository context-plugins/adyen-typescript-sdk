import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayPalResponseInfo = {
  directCapture?: boolean;
  payerId?: string;
  subject?: string;
};

export const payPalResponseInfoSchema: Schema<PayPalResponseInfo> = s.object<PayPalResponseInfo>({
  directCapture: s.optional(s.boolean()),
  payerId: s.optional(s.string()),
  subject: s.optional(s.string()),
});
