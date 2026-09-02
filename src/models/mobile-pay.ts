import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type49Schema, type Type49 } from "./type49.js";

export type MobilePay = {
  checkoutAttemptId?: string;
  sdkData?: string;
  type?: Type49;
};

export const mobilePaySchema: Schema<MobilePay> = s.object<MobilePay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type49Schema)),
});
