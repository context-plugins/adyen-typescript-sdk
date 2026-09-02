import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScaDeviceType = {
  Browser: "browser",
  Ios: "ios",
  Android: "android",
} as const;
export type ScaDeviceType = (typeof ScaDeviceType)[keyof typeof ScaDeviceType] | (string & {});

export const scaDeviceTypeSchema: EnumSchema<ScaDeviceType> = s.enumOf<ScaDeviceType>(ScaDeviceType);
