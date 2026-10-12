import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of PIN Service. Possible values:
 * * **PINVerify**
 * * **PINVerifyOnly**
 * * **PINEnter**
 */
export const PinRequestType = {
  PinVerify: "PINVerify",
  PinVerifyOnly: "PINVerifyOnly",
  PinEnter: "PINEnter",
} as const;
export type PinRequestType = (typeof PinRequestType)[keyof typeof PinRequestType] | (string & {});

export const pinRequestTypeSchema: EnumSchema<PinRequestType> = s.enumOf<PinRequestType>(PinRequestType);
