import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type37Schema, type Type37 } from "./type37.js";

export type MobilePay = {
  checkoutAttemptId?: string;
  sdkData?: string;
  type?: Type37;
};

export const mobilePaySchema: Schema<MobilePay> = s.object<MobilePay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type37Schema)),
});
