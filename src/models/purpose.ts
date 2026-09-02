import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Purpose = {
  Compliance: "compliance",
  Fraud: "fraud",
  InternalPolicy: "internalPolicy",
  Policy: "policy",
  System: "system",
} as const;
export type Purpose = (typeof Purpose)[keyof typeof Purpose] | (string & {});

export const purposeSchema: EnumSchema<Purpose> = s.enumOf<Purpose>(Purpose);
