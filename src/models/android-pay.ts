import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type6, type6Schema } from "./type6.js";

export type AndroidPay = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **androidpay** @default Type6.Androidpay */
  type?: Type6;
};

export const androidPaySchema: Schema<AndroidPay> = s.object<AndroidPay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.defaulted(type6Schema, Type6.Androidpay),
});
