import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type56, type56Schema } from "./type56.js";

export type WeChatPay = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **wechatpay** @default Type56.Wechatpay */
  type?: Type56;
};

export const weChatPaySchema: Schema<WeChatPay> = s.object<WeChatPay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.defaulted(type56Schema, Type56.Wechatpay),
});
