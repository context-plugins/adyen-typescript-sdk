import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type6Schema, type Type6 } from "./type6.js";

export type AndroidPay = {
  checkoutAttemptId?: string;
  sdkData?: string;
  type?: Type6;
};

export const androidPaySchema: Schema<AndroidPay> = s.object<AndroidPay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type6Schema)),
});
