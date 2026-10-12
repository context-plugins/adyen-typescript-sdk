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

/**
 * For each stored value card loaded or reloaded, in the StoredValue response message. Result of
 * loading/reloading a stored value card.
 */
export type StoredValueResult = {
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
  storedValueTransactionType: StoredValueTransactionType2;
  /** Product code of item purchased with the transaction. Copy. */
  productCode?: number;
  /** Standard product code of item purchased with the transaction. Copy. */
  eanUpc?: number;
  /** Total amount of the item line. */
  itemAmount?: number;
  /** Currency of a monetary amount. Copy. */
  currency?: string;
  /** Data related to the result of the stored value card transaction. */
  storedValueAccountStatus?: StoredValueAccountStatus1;
  /**
   * Identification of the transaction by the host in charge of the stored value transaction. If
   * provided by the Host.
   */
  hostTransactionId?: TransactionIdType7;
};

export const storedValueResultSchema: Schema<StoredValueResult> = s.object<StoredValueResult>({
  storedValueTransactionType: storedValueTransactionType2Schema,
  productCode: s.optional(s.int()),
  eanUpc: s.optional(s.int()),
  itemAmount: s.optional(s.float64()),
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
