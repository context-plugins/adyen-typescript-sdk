import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  storedValueAccountStatus1Schema,
  type StoredValueAccountStatus1,
} from "./stored-value-account-status1.js";
import {
  storedValueTransactionType2Schema,
  type StoredValueTransactionType2,
} from "./stored-value-transaction-type2.js";
import { transactionIdType7Schema, type TransactionIdType7 } from "./transaction-id-type7.js";

export type StoredValueResult = {
  storedValueTransactionType: StoredValueTransactionType2;
  productCode?: number;
  eanUpc?: number;
  itemAmount?: number;
  currency?: string;
  storedValueAccountStatus?: StoredValueAccountStatus1;
  hostTransactionId?: TransactionIdType7;
};

export const storedValueResultSchema: Schema<StoredValueResult> = s.object<StoredValueResult>({
  storedValueTransactionType: storedValueTransactionType2Schema,
  productCode: s.optional(s.number()),
  eanUpc: s.optional(s.number()),
  itemAmount: s.optional(s.number()),
  currency: s.optional(s.string()),
  storedValueAccountStatus: s.optional(s.lazy(() => storedValueAccountStatus1Schema)),
  hostTransactionId: s.optional(s.lazy(() => transactionIdType7Schema)),
  _keysMap: {
    storedValueTransactionType: "StoredValueTransactionType",
    productCode: "ProductCode",
    eanUpc: "EanUpc",
    itemAmount: "ItemAmount",
    currency: "Currency",
    storedValueAccountStatus: "StoredValueAccountStatus",
    hostTransactionId: "HostTransactionID",
  },
});
