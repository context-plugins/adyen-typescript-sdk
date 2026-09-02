import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ThreeDsReqAuthMethod = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
  _05: "05",
  _06: "06",
} as const;
export type ThreeDsReqAuthMethod =
  | (typeof ThreeDsReqAuthMethod)[keyof typeof ThreeDsReqAuthMethod]
  | (string & {});

export const threeDsReqAuthMethodSchema: EnumSchema<ThreeDsReqAuthMethod> =
  s.enumOf<ThreeDsReqAuthMethod>(ThreeDsReqAuthMethod);
