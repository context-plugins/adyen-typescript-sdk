import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayPalInfo = {
  directCapture?: boolean;
  payerId: string;
  subject: string;
};

export const payPalInfoSchema: Schema<PayPalInfo> = s.object<PayPalInfo>({
  directCapture: s.optional(s.boolean()),
  payerId: s.string(),
  subject: s.string(),
});
