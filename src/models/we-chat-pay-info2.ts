import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **wechatpay**. */
export type WeChatPayInfo2 = {
  /** The name of the contact person from merchant support. */
  contactPersonName: string;
  /** The email address of merchant support. */
  email: string;
};

export const weChatPayInfo2Schema: Schema<WeChatPayInfo2> = s.object<WeChatPayInfo2>({
  contactPersonName: s.string(),
  email: s.string(),
});
