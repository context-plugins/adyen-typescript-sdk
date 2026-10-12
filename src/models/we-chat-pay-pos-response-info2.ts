import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **wechatpay_pos** details */
export type WeChatPayPosResponseInfo2 = {
  /** The name of the contact person from merchant support. */
  contactPersonName?: string;
  /** The email address of merchant support. */
  email?: string;
};

export const weChatPayPosResponseInfo2Schema: Schema<WeChatPayPosResponseInfo2> =
  s.object<WeChatPayPosResponseInfo2>({
    contactPersonName: s.optional(s.string()),
    email: s.optional(s.string()),
  });
