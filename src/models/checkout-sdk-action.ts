import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type19Schema, type Type19 } from "./type19.js";

export type CheckoutSdkAction = {
  /** Encoded payment data. */
  paymentData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** The data to pass to the SDK. */
  sdkData?: Record<string, string>;
  /** The type of the action. */
  type: Type19;
  /** Specifies the URL to redirect to. */
  url?: string;
};

export const checkoutSdkActionSchema: Schema<CheckoutSdkAction> = s.object<CheckoutSdkAction>({
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  sdkData: s.optional(s.record(s.string(), s.string())),
  type: type19Schema,
  url: s.optional(s.string()),
});
