import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountHolderType = {
  Business: "business",
  Personal: "personal",
} as const;
export type AccountHolderType = (typeof AccountHolderType)[keyof typeof AccountHolderType] | (string & {});

export const accountHolderTypeSchema: EnumSchema<AccountHolderType> =
  s.enumOf<AccountHolderType>(AccountHolderType);
