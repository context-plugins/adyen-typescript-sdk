import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entryModeSchema, type EntryMode } from "./entry-mode.js";
import { identificationType11Schema, type IdentificationType11 } from "./identification-type11.js";
import { storedValueAccountType1Schema, type StoredValueAccountType1 } from "./stored-value-account-type1.js";

export type StoredValueAccountId = {
  storedValueAccountType: StoredValueAccountType1;
  storedValueProvider?: string;
  ownerName?: string;
  expiryDate?: number;
  entryMode: EntryMode[];
  identificationType: IdentificationType11;
  storedValueId: string;
};

export const storedValueAccountIdSchema: Schema<StoredValueAccountId> = s.object<StoredValueAccountId>({
  storedValueAccountType: storedValueAccountType1Schema,
  storedValueProvider: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  expiryDate: s.optional(s.number()),
  entryMode: s.array(s.lazy(() => entryModeSchema)),
  identificationType: identificationType11Schema,
  storedValueId: s.string(),
  _keysMap: {
    storedValueAccountType: "StoredValueAccountType",
    storedValueProvider: "StoredValueProvider",
    ownerName: "OwnerName",
    expiryDate: "ExpiryDate",
    entryMode: "EntryMode",
    identificationType: "IdentificationType",
    storedValueId: "StoredValueID",
  },
});
