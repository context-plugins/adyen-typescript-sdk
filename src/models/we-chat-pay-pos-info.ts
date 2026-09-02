import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayPosInfo = {
  contactPersonName: string;
  email: string;
};

export const weChatPayPosInfoSchema: Schema<WeChatPayPosInfo> = s.object<WeChatPayPosInfo>({
  contactPersonName: s.string(),
  email: s.string(),
});
