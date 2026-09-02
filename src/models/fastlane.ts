import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type41Schema, type Type41 } from "./type41.js";

export type Fastlane = {
  checkoutAttemptId?: string;
  fastlaneData: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type: Type41;
};

export const fastlaneSchema: Schema<Fastlane> = s.object<Fastlane>({
  checkoutAttemptId: s.optional(s.string()),
  fastlaneData: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type41Schema,
});
