import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayInfo = {
  contactPersonName: string;
  email: string;
};

export const weChatPayInfoSchema: Schema<WeChatPayInfo> = s.object<WeChatPayInfo>({
  contactPersonName: s.string(),
  email: s.string(),
});
