import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ThreeDsReqPriorAuthMethod = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
} as const;
export type ThreeDsReqPriorAuthMethod =
  | (typeof ThreeDsReqPriorAuthMethod)[keyof typeof ThreeDsReqPriorAuthMethod]
  | (string & {});

export const threeDsReqPriorAuthMethodSchema: EnumSchema<ThreeDsReqPriorAuthMethod> =
  s.enumOf<ThreeDsReqPriorAuthMethod>(ThreeDsReqPriorAuthMethod);
