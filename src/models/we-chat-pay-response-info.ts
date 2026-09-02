import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayResponseInfo = {
  contactPersonName?: string;
  email?: string;
};

export const weChatPayResponseInfoSchema: Schema<WeChatPayResponseInfo> = s.object<WeChatPayResponseInfo>({
  contactPersonName: s.optional(s.string()),
  email: s.optional(s.string()),
});
