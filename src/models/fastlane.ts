import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Fastlane = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The encoded fastlane data blob */
  fastlaneData: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **fastlane** @default "fastlane" */
  type?: "fastlane";
};

export const fastlaneSchema: Schema<Fastlane> = s.object<Fastlane>({
  checkoutAttemptId: s.optional(s.string()),
  fastlaneData: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(s.literal("fastlane"), "fastlane"),
});
