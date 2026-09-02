import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
