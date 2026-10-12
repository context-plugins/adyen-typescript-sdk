import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transfer to which the limit applies. Possible values:
 * * **instant**: the limit applies to transfers with an **instant** priority.
 * * **all**: the limit applies to all transfers, regardless of priority.
 */
export const TransferType = {
  Instant: "instant",
  All: "all",
} as const;
export type TransferType = (typeof TransferType)[keyof typeof TransferType] | (string & {});

export const transferTypeSchema: EnumSchema<TransferType> = s.enumOf<TransferType>(TransferType);
