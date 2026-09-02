import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type AmazonPay = {
  amazonPayToken?: string;
  checkoutAttemptId?: string;
  checkoutSessionId?: string;
  sdkData?: string;
  type?: Type4;
};

export const amazonPaySchema: Schema<AmazonPay> = s.object<AmazonPay>({
  amazonPayToken: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  checkoutSessionId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type4Schema)),
});
