import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type56Schema, type Type56 } from "./type56.js";

export type WeChatPay = {
  checkoutAttemptId?: string;
  sdkData?: string;
  type?: Type56;
};

export const weChatPaySchema: Schema<WeChatPay> = s.object<WeChatPay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type56Schema)),
});
