import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 3D Secure server response. It notifies whether the specified card holder is enrolled in a 3D
 * Secure service. Possible values:
 *
 * * Y (Authentication available)
 * * N (Card holder not enrolled/not participating)
 * * U (Unable to authenticate)
 */
export const ThreeDDirectoryServerResponse = {
  N: "N",
  U: "U",
  Y: "Y",
} as const;
export type ThreeDDirectoryServerResponse =
  | (typeof ThreeDDirectoryServerResponse)[keyof typeof ThreeDDirectoryServerResponse]
  | (string & {});

export const threeDDirectoryServerResponseSchema: EnumSchema<ThreeDDirectoryServerResponse> =
  s.enumOf<ThreeDDirectoryServerResponse>(ThreeDDirectoryServerResponse);
