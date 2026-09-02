import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayPosResponseInfo2 = {
  contactPersonName?: string;
  email?: string;
};

export const weChatPayPosResponseInfo2Schema: Schema<WeChatPayPosResponseInfo2> =
  s.object<WeChatPayPosResponseInfo2>({
    contactPersonName: s.optional(s.string()),
    email: s.optional(s.string()),
  });
