import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { storedValueAccountIdSchema, type StoredValueAccountId } from "./stored-value-account-id.js";

export type StoredValueAccountStatus = {
  /**
   * Identification of the stored value account or the stored value card and the associated product
   * sold by the Sale System for stored value requests.
   */
  storedValueAccountId: StoredValueAccountId;
  /** If relevant and known. */
  currentBalance?: number;
};

export const storedValueAccountStatusSchema: Schema<StoredValueAccountStatus> =
  s.object<StoredValueAccountStatus>({
    storedValueAccountId: storedValueAccountIdSchema,
    currentBalance: s.optional(s.float64()),
    _keysMap: {
      storedValueAccountId: "StoredValueAccountID",
      currentBalance: "CurrentBalance",
    },
  });
