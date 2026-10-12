import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor. Allowed values:
 * * **01** — Frictionless authentication occurred by ACS.
 * * **02** — Cardholder challenge occurred by ACS.
 * * **03** — AVS verified.
 * * **04** — Other issuer methods.
 */
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
