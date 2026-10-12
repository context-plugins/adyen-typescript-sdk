import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type57, type57Schema } from "./type57.js";

export type WeChatPayMiniProgram = {
  appId?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  openid?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **wechatpayMiniProgram** @default Type57.WechatpayMiniProgram */
  type?: Type57;
};

export const weChatPayMiniProgramSchema: Schema<WeChatPayMiniProgram> = s.object<WeChatPayMiniProgram>({
  appId: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  openid: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type57Schema, Type57.WechatpayMiniProgram),
});
