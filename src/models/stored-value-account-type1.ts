import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of stored value account. Allows the distinction of the stored value instrument to access the
 * stored value account. Possible values:
 * * **GiftCard**
 * * **Other**
 * * **PhoneCard**
 */
export const StoredValueAccountType1 = {
  GiftCard: "GiftCard",
  PhoneCard: "PhoneCard",
  Other: "Other",
} as const;
export type StoredValueAccountType1 =
  | (typeof StoredValueAccountType1)[keyof typeof StoredValueAccountType1]
  | (string & {});

export const storedValueAccountType1Schema: EnumSchema<StoredValueAccountType1> =
  s.enumOf<StoredValueAccountType1>(StoredValueAccountType1);
