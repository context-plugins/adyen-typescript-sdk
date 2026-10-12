import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutQrCodeAction = {
  /** Expiry time of the QR code. */
  expiresAt?: string;
  /** Encoded payment data. */
  paymentData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** The contents of the QR code as a UTF8 string. */
  qrCodeData?: string;
  /** **qrCode** @default "qrCode" */
  type?: "qrCode";
  /** Specifies the URL to redirect to. */
  url?: string;
};

export const checkoutQrCodeActionSchema: Schema<CheckoutQrCodeAction> = s.object<CheckoutQrCodeAction>({
  expiresAt: s.optional(s.string()),
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  qrCodeData: s.optional(s.string()),
  type: s.defaulted(s.literal("qrCode"), "qrCode"),
  url: s.optional(s.string()),
});
