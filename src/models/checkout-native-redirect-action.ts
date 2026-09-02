import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type22Schema, type Type22 } from "./type22.js";

export type CheckoutNativeRedirectAction = {
  data?: Record<string, string>;
  method?: string;
  nativeRedirectData?: string;
  paymentMethodType?: string;
  type: Type22;
  url?: string;
};

export const checkoutNativeRedirectActionSchema: Schema<CheckoutNativeRedirectAction> =
  s.object<CheckoutNativeRedirectAction>({
    data: s.optional(s.record(s.string(), s.string())),
    method: s.optional(s.string()),
    nativeRedirectData: s.optional(s.string()),
    paymentMethodType: s.optional(s.string()),
    type: type22Schema,
    url: s.optional(s.string()),
  });
