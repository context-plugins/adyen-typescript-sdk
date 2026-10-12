import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentQualifierSchema, type DocumentQualifier } from "./document-qualifier.js";
import { messageReference2Schema, type MessageReference2 } from "./message-reference2.js";

/** Content of the TransactionStatus Request message. */
export type TransactionStatusRequest2 = {
  /** Identification of a previous POI transaction. Present if it contains any data. */
  messageReference?: MessageReference2;
  /**
   * Request to reprint the POI receipt(s). Allows reprinting a receipt with a `TransactionStatus`
   * message
   *
   * @default false
   */
  receiptReprintFlag?: boolean;
  /**
   * Qualification of the document to print to the Cashier or the Customer. Allows the manager of
   * the printer, Sale or POI Terminal, to send the information to a particular physical printer or
   * to use the paper type accordingly. Possible values:
   * * **CashierReceipt**
   * * **CustomerReceipt**
   * * **Document**
   * * **Journal**
   * * **SaleReceipt**
   * * **Voucher**
   */
  documentQualifier?: DocumentQualifier[];
};

export const transactionStatusRequest2Schema: Schema<TransactionStatusRequest2> =
  s.object<TransactionStatusRequest2>({
    messageReference: s.optional(s.lazy(() => messageReference2Schema)),
    receiptReprintFlag: s.defaulted(s.boolean(), false),
    documentQualifier: s.optional(s.array(s.lazy(() => documentQualifierSchema))),
    _keysMap: {
      messageReference: "MessageReference",
      receiptReprintFlag: "ReceiptReprintFlag",
      documentQualifier: "DocumentQualifier",
    },
  });
