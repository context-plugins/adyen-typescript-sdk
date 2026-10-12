import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayPosResponseInfo = {
  /** The name of the contact person from merchant support. */
  contactPersonName?: string;
  /** The email address of merchant support. */
  email?: string;
};

export const weChatPayPosResponseInfoSchema: Schema<WeChatPayPosResponseInfo> =
  s.object<WeChatPayPosResponseInfo>({
    contactPersonName: s.optional(s.string()),
    email: s.optional(s.string()),
  });
