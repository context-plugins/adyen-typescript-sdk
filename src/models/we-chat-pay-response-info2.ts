import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **wechatpay** details */
export type WeChatPayResponseInfo2 = {
  /** The name of the contact person from merchant support. */
  contactPersonName?: string;
  /** The email address of merchant support. */
  email?: string;
};

export const weChatPayResponseInfo2Schema: Schema<WeChatPayResponseInfo2> = s.object<WeChatPayResponseInfo2>({
  contactPersonName: s.optional(s.string()),
  email: s.optional(s.string()),
});
