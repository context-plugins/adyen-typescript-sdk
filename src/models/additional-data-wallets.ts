import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataWallets = {
  androidpayToken?: string;
  masterpassTransactionId?: string;
  paymentToken?: string;
  paywithgoogleToken?: string;
  samsungpayToken?: string;
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
