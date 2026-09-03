import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Fastlane = {
  checkoutAttemptId?: string;
  fastlaneData: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type: "fastlane";
};

export const fastlaneSchema: Schema<Fastlane> = s.object<Fastlane>({
  checkoutAttemptId: s.optional(s.string()),
  fastlaneData: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.literal("fastlane"),
});
