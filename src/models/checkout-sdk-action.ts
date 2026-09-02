import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type25Schema, type Type25 } from "./type25.js";

export type CheckoutSdkAction = {
  paymentData?: string;
  paymentMethodType?: string;
  sdkData?: Record<string, string>;
  type: Type25;
  url?: string;
};

export const checkoutSdkActionSchema: Schema<CheckoutSdkAction> = s.object<CheckoutSdkAction>({
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  sdkData: s.optional(s.record(s.string(), s.string())),
  type: type25Schema,
  url: s.optional(s.string()),
});
