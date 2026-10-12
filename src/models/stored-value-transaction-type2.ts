import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Identification of operation to proceed on the stored value account or the stored value card.
 * Copy. Possible values:
 * * **Activate**
 * * **Duplicate**
 * * **Load**
 * * **Reserve**
 * * **Reverse**
 * * **Unload**
 */
export const StoredValueTransactionType2 = {
  Reserve: "Reserve",
  Activate: "Activate",
  Load: "Load",
  Unload: "Unload",
  Reverse: "Reverse",
  Duplicate: "Duplicate",
} as const;
export type StoredValueTransactionType2 =
  | (typeof StoredValueTransactionType2)[keyof typeof StoredValueTransactionType2]
  | (string & {});

export const storedValueTransactionType2Schema: EnumSchema<StoredValueTransactionType2> =
  s.enumOf<StoredValueTransactionType2>(StoredValueTransactionType2);
