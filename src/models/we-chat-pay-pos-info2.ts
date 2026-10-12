import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **wechatpay_pos**. */
export type WeChatPayPosInfo2 = {
  /** The name of the contact person from merchant support. */
  contactPersonName: string;
  /** The email address of merchant support. */
  email: string;
};

export const weChatPayPosInfo2Schema: Schema<WeChatPayPosInfo2> = s.object<WeChatPayPosInfo2>({
  contactPersonName: s.string(),
  email: s.string(),
});
