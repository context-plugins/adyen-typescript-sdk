import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { checkoutAwaitActionSchema, type CheckoutAwaitAction } from "../checkout-await-action.js";
import {
  checkoutBankTransferActionSchema,
  type CheckoutBankTransferAction,
} from "../checkout-bank-transfer-action.js";
import {
  checkoutDelegatedAuthenticationActionSchema,
  type CheckoutDelegatedAuthenticationAction,
} from "../checkout-delegated-authentication-action.js";
import {
  checkoutNativeRedirectActionSchema,
  type CheckoutNativeRedirectAction,
} from "../checkout-native-redirect-action.js";
import { checkoutQrCodeActionSchema, type CheckoutQrCodeAction } from "../checkout-qr-code-action.js";
import { checkoutRedirectActionSchema, type CheckoutRedirectAction } from "../checkout-redirect-action.js";
import { checkoutSdkActionSchema, type CheckoutSdkAction } from "../checkout-sdk-action.js";
import { checkoutThreeDs2ActionSchema, type CheckoutThreeDs2Action } from "../checkout-three-ds2-action.js";
import { checkoutVoucherActionSchema, type CheckoutVoucherAction } from "../checkout-voucher-action.js";

export type Action11 =
  | (CheckoutBankTransferAction & { type: "bankTransfer" })
  | (CheckoutQrCodeAction & { type: "qrCode" })
  | (CheckoutNativeRedirectAction & { type: "nativeRedirect" })
  | (CheckoutRedirectAction & { type: "redirect" })
  | (CheckoutSdkAction & { type: "sdk" })
  | (CheckoutSdkAction & { type: "wechatpaySDK" })
  | (CheckoutThreeDs2Action & { type: "threeDS2" })
  | (CheckoutDelegatedAuthenticationAction & { type: "delegatedAuthentication" })
  | (CheckoutAwaitAction & { type: "await" })
  | (CheckoutVoucherAction & { type: "voucher" });

export const action11Schema: Schema<Action11> = s.discriminatedUnion<Action11>("type", {
  bankTransfer: checkoutBankTransferActionSchema,
  qrCode: checkoutQrCodeActionSchema,
  nativeRedirect: checkoutNativeRedirectActionSchema,
  redirect: checkoutRedirectActionSchema,
  sdk: checkoutSdkActionSchema,
  wechatpaySDK: checkoutSdkActionSchema,
  threeDS2: checkoutThreeDs2ActionSchema,
  delegatedAuthentication: checkoutDelegatedAuthenticationActionSchema,
  await: checkoutAwaitActionSchema,
  voucher: checkoutVoucherActionSchema,
});
