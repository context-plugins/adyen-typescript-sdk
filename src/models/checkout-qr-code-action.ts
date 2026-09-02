import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type23Schema, type Type23 } from "./type23.js";

export type CheckoutQrCodeAction = {
  expiresAt?: string;
  paymentData?: string;
  paymentMethodType?: string;
  qrCodeData?: string;
  type: Type23;
  url?: string;
};

export const checkoutQrCodeActionSchema: Schema<CheckoutQrCodeAction> = s.object<CheckoutQrCodeAction>({
  expiresAt: s.optional(s.string()),
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  qrCodeData: s.optional(s.string()),
  type: type23Schema,
  url: s.optional(s.string()),
});
