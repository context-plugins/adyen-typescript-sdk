import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayPalInfo1 = {
  directCapture?: boolean;
  payerId: string;
  subject: string;
};

export const payPalInfo1Schema: Schema<PayPalInfo1> = s.object<PayPalInfo1>({
  directCapture: s.optional(s.boolean()),
  payerId: s.string(),
  subject: s.string(),
});
