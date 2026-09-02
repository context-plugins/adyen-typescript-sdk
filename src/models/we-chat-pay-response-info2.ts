import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayResponseInfo2 = {
  contactPersonName?: string;
  email?: string;
};

export const weChatPayResponseInfo2Schema: Schema<WeChatPayResponseInfo2> = s.object<WeChatPayResponseInfo2>({
  contactPersonName: s.optional(s.string()),
  email: s.optional(s.string()),
});
