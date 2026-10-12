import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originalPoiTransaction1Schema, type OriginalPoiTransaction1 } from "./original-poi-transaction1.js";
import { storedValueAccountId1Schema, type StoredValueAccountId1 } from "./stored-value-account-id1.js";
import {
  storedValueTransactionType1Schema,
  type StoredValueTransactionType1,
} from "./stored-value-transaction-type1.js";

/**
 * It contains: - the identification of the stored value accounts or the stored value cards, if
 * provided by the Sale System, and - the associated products sold by the Sale System. Data related
 * to the stored value card.
 */
export type StoredValueData = {
  /**
   * Identification of the provider of the stored value account load/reload. If more than one
   * provider to manage on the POI, and StoredValueAccountID absent.
   */
  storedValueProvider?: string;
  /**
   * Identification of operation to proceed on the stored value account or the stored value card.
   * Possible values:
   * * **Activate**
   * * **Duplicate**
   * * **Load**
   * * **Reserve**
   * * **Reverse**
   * * **Unload**
   */
  storedValueTransactionType: StoredValueTransactionType1;
  /**
   * Identification of the stored value account or the stored value card. If the identification of
   * the Stored Value account or card has been made by the Sale System before the request.
   */
  storedValueAccountId?: StoredValueAccountId1;
  /**
   * Identification of a previous POI transaction. If StoredValueTransactionType is Reverse or
   * Duplicate.
   */
  originalPoiTransaction?: OriginalPoiTransaction1;
  /** Product code of item purchased with the transaction. */
  productCode?: number;
  /** Standard product code of item purchased with the transaction. */
  eanUpc?: number;
  /** Total amount of the item line. */
  itemAmount?: number;
  /** Currency of a monetary amount. */
  currency?: string;
};

export const storedValueDataSchema: Schema<StoredValueData> = s.object<StoredValueData>({
  storedValueProvider: s.optional(s.string()),
  storedValueTransactionType: storedValueTransactionType1Schema,
  storedValueAccountId: s.optional(s.lazy(() => storedValueAccountId1Schema)),
  originalPoiTransaction: s.optional(s.lazy(() => originalPoiTransaction1Schema)),
  productCode: s.optional(s.int()),
  eanUpc: s.optional(s.int()),
  itemAmount: s.optional(s.float64()),
  currency: s.optional(s.string()),
  _keysMap: {
    storedValueProvider: "StoredValueProvider",
    storedValueTransactionType: "StoredValueTransactionType",
    storedValueAccountId: "StoredValueAccountID",
    originalPoiTransaction: "OriginalPOITransaction",
    productCode: "ProductCode",
    eanUpc: "EanUpc",
    itemAmount: "ItemAmount",
    currency: "Currency",
  },
});
