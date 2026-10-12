import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the device. */
export const ScaDeviceType3 = {
  Browser: "browser",
  Ios: "ios",
  Android: "android",
} as const;
export type ScaDeviceType3 = (typeof ScaDeviceType3)[keyof typeof ScaDeviceType3] | (string & {});

export const scaDeviceType3Schema: EnumSchema<ScaDeviceType3> = s.enumOf<ScaDeviceType3>(ScaDeviceType3);
