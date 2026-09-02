import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeChatPayInfo2 = {
  contactPersonName: string;
  email: string;
};

export const weChatPayInfo2Schema: Schema<WeChatPayInfo2> = s.object<WeChatPayInfo2>({
  contactPersonName: s.string(),
  email: s.string(),
});
