import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if [native 3D Secure
 * authentication](https://docs.adyen.com/online-payments/3d-secure/native-3ds2) should be triggered
 * when available. Adyen can still select to fallback to the redirect flow to optimize authorization
 * rates and improve the shopper's experience.
 *
 * Possible values:
 * * **preferred**: Use native 3D Secure authentication when available.
 * * **disabled**: Use the redirect 3D Secure authentication flow.
 */
export const NativeThreeDs = {
  Preferred: "preferred",
  Disabled: "disabled",
} as const;
export type NativeThreeDs = (typeof NativeThreeDs)[keyof typeof NativeThreeDs] | (string & {});

export const nativeThreeDsSchema: EnumSchema<NativeThreeDs> = s.enumOf<NativeThreeDs>(NativeThreeDs);
