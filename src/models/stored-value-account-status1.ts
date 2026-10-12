import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { storedValueAccountIdSchema, type StoredValueAccountId } from "./stored-value-account-id.js";

/** Data related to the result of the stored value card transaction. */
export type StoredValueAccountStatus1 = {
  /**
   * Identification of the stored value account or the stored value card and the associated product
   * sold by the Sale System for stored value requests.
   */
  storedValueAccountId: StoredValueAccountId;
  /** If relevant and known. */
  currentBalance?: number;
};

export const storedValueAccountStatus1Schema: Schema<StoredValueAccountStatus1> =
  s.object<StoredValueAccountStatus1>({
    storedValueAccountId: storedValueAccountIdSchema,
    currentBalance: s.optional(s.float64()),
    _keysMap: {
      storedValueAccountId: "StoredValueAccountID",
      currentBalance: "CurrentBalance",
    },
  });
