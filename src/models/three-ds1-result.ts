import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDs1Result = {
  cavv?: string;
  cavvAlgorithm?: string;
  eci?: string;
  threeDAuthenticatedResponse?: string;
  threeDOfferedResponse?: string;
  xid?: string;
};

export const threeDs1ResultSchema: Schema<ThreeDs1Result> = s.object<ThreeDs1Result>({
  cavv: s.optional(s.string()),
  cavvAlgorithm: s.optional(s.string()),
  eci: s.optional(s.string()),
  threeDAuthenticatedResponse: s.optional(s.string()),
  threeDOfferedResponse: s.optional(s.string()),
  xid: s.optional(s.string()),
});
