import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type19Schema, type Type19 } from "./type19.js";

export type CheckoutSdkAction = {
  paymentData?: string;
  paymentMethodType?: string;
  sdkData?: Record<string, string>;
  type: Type19;
  url?: string;
};

export const checkoutSdkActionSchema: Schema<CheckoutSdkAction> = s.object<CheckoutSdkAction>({
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  sdkData: s.optional(s.record(s.string(), s.string())),
  type: type19Schema,
  url: s.optional(s.string()),
});
