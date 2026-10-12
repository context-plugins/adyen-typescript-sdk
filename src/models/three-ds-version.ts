import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The version of 3D Secure to use.
 *
 * Possible values:
 *
 * * **2.1.0**
 * * **2.2.0**
 */
export const ThreeDsVersion = {
  _210: "2.1.0",
  _220: "2.2.0",
} as const;
export type ThreeDsVersion = (typeof ThreeDsVersion)[keyof typeof ThreeDsVersion] | (string & {});

export const threeDsVersionSchema: EnumSchema<ThreeDsVersion> = s.enumOf<ThreeDsVersion>(ThreeDsVersion);
