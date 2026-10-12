import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayInfo = {
  /** The name of the contact person from merchant support. */
  contactPersonName: string;
  /** The email address of merchant support. */
  email: string;
};

export const weChatPayInfoSchema: Schema<WeChatPayInfo> = s.object<WeChatPayInfo>({
  contactPersonName: s.string(),
  email: s.string(),
});
