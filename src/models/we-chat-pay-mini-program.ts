import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type57Schema, type Type57 } from "./type57.js";

export type WeChatPayMiniProgram = {
  appId?: string;
  checkoutAttemptId?: string;
  openid?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type57;
};

export const weChatPayMiniProgramSchema: Schema<WeChatPayMiniProgram> = s.object<WeChatPayMiniProgram>({
  appId: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  openid: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type57Schema)),
});
