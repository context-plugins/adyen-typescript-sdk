import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StoredValueAccountType = {
  GiftCard: "GiftCard",
  PhoneCard: "PhoneCard",
  Other: "Other",
} as const;
export type StoredValueAccountType =
  | (typeof StoredValueAccountType)[keyof typeof StoredValueAccountType]
  | (string & {});

export const storedValueAccountTypeSchema: EnumSchema<StoredValueAccountType> =
  s.enumOf<StoredValueAccountType>(StoredValueAccountType);
