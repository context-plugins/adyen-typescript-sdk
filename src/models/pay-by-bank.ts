import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayByBank = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The PayByBank issuer value of the shopper's selected bank. */
  issuer?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **paybybank** @default "paybybank" */
  type?: "paybybank";
};

export const payByBankSchema: Schema<PayByBank> = s.object<PayByBank>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.defaulted(s.literal("paybybank"), "paybybank"),
});
