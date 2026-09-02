import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type75 = {
  Wechatpay: "wechatpay",
  WechatpayPos: "wechatpay_pos",
} as const;
export type Type75 = (typeof Type75)[keyof typeof Type75] | (string & {});

export const type75Schema: EnumSchema<Type75> = s.enumOf<Type75>(Type75);
