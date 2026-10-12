import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountsReqSchema, type AmountsReq } from "./amounts-req.js";
import { originalPoiTransactionSchema, type OriginalPoiTransaction } from "./original-poi-transaction.js";
import { transactionConditionsSchema, type TransactionConditions } from "./transaction-conditions.js";

/** Data related to the payment and loyalty transaction. */
export type PaymentTransaction1 = {
  /** Various amounts related to the payment request from the Sale System. */
  amountsReq: AmountsReq;
  /**
   * Identification of a previous POI transaction. In the Payment Request message, it allows using
   * the card of a previous CardAcquisition or Payment request.
   */
  originalPoiTransaction?: OriginalPoiTransaction;
  /** Conditions on which the transaction must be processed. */
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
