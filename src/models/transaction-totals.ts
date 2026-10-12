import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentInstrumentType11Schema, type PaymentInstrumentType11 } from "./payment-instrument-type11.js";
import { paymentTotalsSchema, type PaymentTotals } from "./payment-totals.js";

/**
 * If Result is Success, contains all the totals, classified as required by the Sale in the message
 * request. At least, transaction totals are provided per Acquirer, Acquirer Settlement, and Card
 * Brand. Result of the Sale to POI Reconciliation processing.
 */
export type TransactionTotals = {
  /**
   * Type of payment instrument. Possible values:
   * * **Card**
   * * **Cash**
   * * **Check**
   * * **Mobile**
   * * **StoredValue**
   */
  paymentInstrumentType: PaymentInstrumentType11;
  /** Identification of the Acquirer. */
  acquirerId?: number;
  /** Identifier of a reconciliation period with a payment or loyalty host. */
  hostReconciliationId?: string;
  /**
   * Type of payment or loyalty card. If configured to present totals per card brand, and
   * Response.Result is Success.
   */
  cardBrand?: string;
  /**
   * Identification of a POI System or a POI Terminal for the Sale to POI protocol. Sent if
   * requested in the message request.
   */
  poiid?: string;
  /**
   * Identification of a Sale System or a Sale Terminal for the Sale to POI protocol. Sent if
   * requested in the message request.
   */
  saleId?: string;
  /** Identification of the Cashier or Operator. Sent if requested in the message request. */
  operatorId?: string;
  /** Shift number. Sent if requested in the message request. */
  shiftNumber?: string;
  /**
   * Identification of a group of transaction on a POI Terminal, having the same Sale features. Sent
   * if requested in the message request.
   */
  totalsGroupId?: string;
  /** Currency of a monetary amount. */
  paymentCurrency?: string;
  /**
   * Totals of the payment transaction during the reconciliation period. If both `TransactionCount`
   * and `TransactionAmount` are not equal to zero.
   */
  paymentTotals?: PaymentTotals[];
};

export const transactionTotalsSchema: Schema<TransactionTotals> = s.object<TransactionTotals>({
  paymentInstrumentType: paymentInstrumentType11Schema,
  acquirerId: s.optional(s.int()),
  hostReconciliationId: s.optional(s.string()),
  cardBrand: s.optional(s.string()),
  poiid: s.optional(s.string()),
  saleId: s.optional(s.string()),
  operatorId: s.optional(s.string()),
  shiftNumber: s.optional(s.string()),
  totalsGroupId: s.optional(s.string()),
  paymentCurrency: s.optional(s.string()),
  paymentTotals: s.optional(s.array(s.lazy(() => paymentTotalsSchema))),
  _keysMap: {
    paymentInstrumentType: "PaymentInstrumentType",
    acquirerId: "AcquirerID",
    hostReconciliationId: "HostReconciliationID",
    cardBrand: "CardBrand",
    poiid: "POIID",
    saleId: "SaleID",
    operatorId: "OperatorID",
    shiftNumber: "ShiftNumber",
    totalsGroupId: "TotalsGroupID",
    paymentCurrency: "PaymentCurrency",
    paymentTotals: "PaymentTotals",
  },
});
