import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountsReqSchema, type AmountsReq } from "./amounts-req.js";
import { originalPoiTransactionSchema, type OriginalPoiTransaction } from "./original-poi-transaction.js";
import { transactionConditionsSchema, type TransactionConditions } from "./transaction-conditions.js";

export type PaymentTransaction1 = {
  amountsReq: AmountsReq;
  originalPoiTransaction?: OriginalPoiTransaction;
  transactionConditions?: TransactionConditions;
};

export const paymentTransaction1Schema: Schema<PaymentTransaction1> = s.object<PaymentTransaction1>({
  amountsReq: amountsReqSchema,
  originalPoiTransaction: s.optional(s.lazy(() => originalPoiTransactionSchema)),
  transactionConditions: s.optional(s.lazy(() => transactionConditionsSchema)),
  _keysMap: {
    amountsReq: "AmountsReq",
    originalPoiTransaction: "OriginalPOITransaction",
    transactionConditions: "TransactionConditions",
  },
});
