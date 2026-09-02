import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { storedValueAccountIdSchema, type StoredValueAccountId } from "./stored-value-account-id.js";

export type StoredValueAccountStatus1 = {
  storedValueAccountId: StoredValueAccountId;
  currentBalance?: number;
};

export const storedValueAccountStatus1Schema: Schema<StoredValueAccountStatus1> =
  s.object<StoredValueAccountStatus1>({
    storedValueAccountId: storedValueAccountIdSchema,
    currentBalance: s.optional(s.number()),
    _keysMap: {
      storedValueAccountId: "StoredValueAccountID",
      currentBalance: "CurrentBalance",
    },
  });
