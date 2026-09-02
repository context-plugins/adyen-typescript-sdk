import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType4Schema, type TransactionIdType4 } from "./transaction-id-type4.js";
import { transactionIdType5Schema, type TransactionIdType5 } from "./transaction-id-type5.js";

export type OriginalPoiTransaction1 = {
  saleId?: string;
  poiid?: string;
  poiTransactionId?: TransactionIdType4;
  reuseCardDataFlag?: boolean;
  approvalCode?: string;
  acquirerId?: number;
  amountValue?: number;
  hostTransactionId?: TransactionIdType5;
};

export const originalPoiTransaction1Schema: Schema<OriginalPoiTransaction1> =
  s.object<OriginalPoiTransaction1>({
    saleId: s.optional(s.string()),
    poiid: s.optional(s.string()),
    poiTransactionId: s.optional(s.lazy(() => transactionIdType4Schema)),
    reuseCardDataFlag: s.optional(s.boolean()),
    approvalCode: s.optional(s.string()),
    acquirerId: s.optional(s.number()),
    amountValue: s.optional(s.number()),
    hostTransactionId: s.optional(s.lazy(() => transactionIdType5Schema)),
    _keysMap: {
      saleId: "SaleID",
      poiid: "POIID",
      poiTransactionId: "POITransactionID",
      reuseCardDataFlag: "ReuseCardDataFlag",
      approvalCode: "ApprovalCode",
      acquirerId: "AcquirerID",
      amountValue: "AmountValue",
      hostTransactionId: "HostTransactionID",
    },
  });
