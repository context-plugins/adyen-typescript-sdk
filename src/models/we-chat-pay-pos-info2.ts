import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayPosInfo2 = {
  contactPersonName: string;
  email: string;
};

export const weChatPayPosInfo2Schema: Schema<WeChatPayPosInfo2> = s.object<WeChatPayPosInfo2>({
  contactPersonName: s.string(),
  email: s.string(),
});
