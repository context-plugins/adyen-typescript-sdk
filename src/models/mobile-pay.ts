import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type37, type37Schema } from "./type37.js";

export type MobilePay = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **mobilepay** @default Type37.Mobilepay */
  type?: Type37;
};

export const mobilePaySchema: Schema<MobilePay> = s.object<MobilePay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.defaulted(type37Schema, Type37.Mobilepay),
});
