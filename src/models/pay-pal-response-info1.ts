import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayPalResponseInfo1 = {
  directCapture?: boolean;
  payerId?: string;
  subject?: string;
};

export const payPalResponseInfo1Schema: Schema<PayPalResponseInfo1> = s.object<PayPalResponseInfo1>({
  directCapture: s.optional(s.boolean()),
  payerId: s.optional(s.string()),
  subject: s.optional(s.string()),
});
