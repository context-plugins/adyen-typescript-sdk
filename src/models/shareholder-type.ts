import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how the person is associated with the account holder.
 *
 * Possible values:
 *
 * * **Owner**: Individuals who directly or indirectly own 25% or more of a company.
 *
 * * **Controller**: Individuals who are members of senior management staff responsible for managing
 *   a company or organization.
 */
export const ShareholderType = {
  Controller: "Controller",
  Owner: "Owner",
  Signatory: "Signatory",
} as const;
export type ShareholderType = (typeof ShareholderType)[keyof typeof ShareholderType] | (string & {});

export const shareholderTypeSchema: EnumSchema<ShareholderType> = s.enumOf<ShareholderType>(ShareholderType);
