import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originalPoiTransaction1Schema, type OriginalPoiTransaction1 } from "./original-poi-transaction1.js";
import { storedValueAccountId1Schema, type StoredValueAccountId1 } from "./stored-value-account-id1.js";
import {
  storedValueTransactionType1Schema,
  type StoredValueTransactionType1,
} from "./stored-value-transaction-type1.js";

export type StoredValueData = {
  storedValueProvider?: string;
  storedValueTransactionType: StoredValueTransactionType1;
  storedValueAccountId?: StoredValueAccountId1;
  originalPoiTransaction?: OriginalPoiTransaction1;
  productCode?: number;
  eanUpc?: number;
  itemAmount?: number;
  currency?: string;
};

export const storedValueDataSchema: Schema<StoredValueData> = s.object<StoredValueData>({
  storedValueProvider: s.optional(s.string()),
  storedValueTransactionType: storedValueTransactionType1Schema,
  storedValueAccountId: s.optional(s.lazy(() => storedValueAccountId1Schema)),
  originalPoiTransaction: s.optional(s.lazy(() => originalPoiTransaction1Schema)),
  productCode: s.optional(s.number()),
  eanUpc: s.optional(s.number()),
  itemAmount: s.optional(s.number()),
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
