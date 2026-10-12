import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of device registered.
 *
 * Possible values: **ios**, **android**, **browser**.
 */
export const ScaDeviceType1 = {
  Browser: "browser",
  Ios: "ios",
  Android: "android",
} as const;
export type ScaDeviceType1 = (typeof ScaDeviceType1)[keyof typeof ScaDeviceType1] | (string & {});

export const scaDeviceType1Schema: EnumSchema<ScaDeviceType1> = s.enumOf<ScaDeviceType1>(ScaDeviceType1);
