import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataWallets = {
  /** The Android Pay token retrieved from the SDK. */
  androidpayToken?: string;
  /** The Mastercard Masterpass Transaction ID retrieved from the SDK. */
  masterpassTransactionId?: string;
  /** The Apple Pay token retrieved from the SDK. */
  paymentToken?: string;
  /** The Google Pay token retrieved from the SDK. */
  paywithgoogleToken?: string;
  /** The Samsung Pay token retrieved from the SDK. */
  samsungpayToken?: string;
  /** The Visa Checkout Call ID retrieved from the SDK. */
  visacheckoutCallId?: string;
};

export const additionalDataWalletsSchema: Schema<AdditionalDataWallets> = s.object<AdditionalDataWallets>({
  androidpayToken: s.optional(s.string()),
  masterpassTransactionId: s.optional(s.string()),
  paymentToken: s.optional(s.string()),
  paywithgoogleToken: s.optional(s.string()),
  samsungpayToken: s.optional(s.string()),
  visacheckoutCallId: s.optional(s.string()),
  _keysMap: {
    androidpayToken: "androidpay.token",
    masterpassTransactionId: "masterpass.transactionId",
    paymentToken: "payment.token",
    paywithgoogleToken: "paywithgoogle.token",
    samsungpayToken: "samsungpay.token",
    visacheckoutCallId: "visacheckout.callId",
  },
});
