import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform where a payment transaction takes place. This field can be used for filtering out
 * payment methods that are only available on specific platforms. Possible values:
 * * iOS
 * * Android
 * * Web
 */
export const Channel3 = {
  IOs: "iOS",
  Android: "Android",
  Web: "Web",
} as const;
export type Channel3 = (typeof Channel3)[keyof typeof Channel3] | (string & {});

export const channel3Schema: EnumSchema<Channel3> = s.enumOf<Channel3>(Channel3);
