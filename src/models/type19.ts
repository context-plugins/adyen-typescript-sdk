import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the action. */
export const Type19 = {
  Sdk: "sdk",
  WechatpaySdk: "wechatpaySDK",
} as const;
export type Type19 = (typeof Type19)[keyof typeof Type19] | (string & {});

export const type19Schema: EnumSchema<Type19> = s.enumOf<Type19>(Type19);
