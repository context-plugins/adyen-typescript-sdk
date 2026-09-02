import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StoredValueTransactionType1 = {
  Reserve: "Reserve",
  Activate: "Activate",
  Load: "Load",
  Unload: "Unload",
  Reverse: "Reverse",
  Duplicate: "Duplicate",
} as const;
export type StoredValueTransactionType1 =
  | (typeof StoredValueTransactionType1)[keyof typeof StoredValueTransactionType1]
  | (string & {});

export const storedValueTransactionType1Schema: EnumSchema<StoredValueTransactionType1> =
  s.enumOf<StoredValueTransactionType1>(StoredValueTransactionType1);
