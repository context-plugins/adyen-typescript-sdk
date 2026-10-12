import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transfer.
 *
 * Possible values:
 *
 *  - **bankTransfer**: for push transfers to a transfer instrument or a bank account. The
 *    `category` must be **bank**.
 * - **internalTransfer**: for push transfers between balance accounts. The `category` must be
 *   **internal**.
 * - **internalDirectDebit**: for pull transfers (direct debits) between balance accounts. The
 *   `category` must be **internal**.
 */
export const Type113 = {
  BankTransfer: "bankTransfer",
  InternalTransfer: "internalTransfer",
  InternalDirectDebit: "internalDirectDebit",
} as const;
export type Type113 = (typeof Type113)[keyof typeof Type113] | (string & {});

export const type113Schema: EnumSchema<Type113> = s.enumOf<Type113>(Type113);
