import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type76 = {
  WechatpayMiniProgram: "wechatpayMiniProgram",
} as const;
export type Type76 = (typeof Type76)[keyof typeof Type76] | (string & {});

export const type76Schema: EnumSchema<Type76> = s.enumOf<Type76>(Type76);
