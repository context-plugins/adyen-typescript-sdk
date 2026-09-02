import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StoredValueTransactionType = {
  Reserve: "Reserve",
  Activate: "Activate",
  Load: "Load",
  Unload: "Unload",
  Reverse: "Reverse",
  Duplicate: "Duplicate",
} as const;
export type StoredValueTransactionType =
  | (typeof StoredValueTransactionType)[keyof typeof StoredValueTransactionType]
  | (string & {});

export const storedValueTransactionTypeSchema: EnumSchema<StoredValueTransactionType> =
  s.enumOf<StoredValueTransactionType>(StoredValueTransactionType);
