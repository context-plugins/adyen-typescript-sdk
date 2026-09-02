import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShareholderType = {
  Controller: "Controller",
  Owner: "Owner",
  Signatory: "Signatory",
} as const;
export type ShareholderType = (typeof ShareholderType)[keyof typeof ShareholderType] | (string & {});

export const shareholderTypeSchema: EnumSchema<ShareholderType> = s.enumOf<ShareholderType>(ShareholderType);
