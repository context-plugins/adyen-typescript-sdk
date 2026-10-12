import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerOrderReqSchema, type CustomerOrderReq } from "./customer-order-req.js";
import { saleTerminalData1Schema, type SaleTerminalData1 } from "./sale-terminal-data1.js";
import { saleToIssuerData1Schema, type SaleToIssuerData1 } from "./sale-to-issuer-data1.js";
import { tokenRequestedType1Schema, type TokenRequestedType1 } from "./token-requested-type1.js";
import { transactionIdType1Schema, type TransactionIdType1 } from "./transaction-id-type1.js";

/** Data related to the Sale System. */
export type SaleData1 = {
  /** Identification of the Cashier or Operator. */
  operatorId?: string;
  /** Language of the Cashier or Operator. If different from the Login. */
  operatorLanguage?: string;
  /** Shift number. If different from the Login, see Login SaleData. */
  shiftNumber?: string;
  /** Identification of a Sale transaction. */
  saleTransactionId: TransactionIdType1;
  /**
   * Identification of a Sale global transaction for a sequence of related POI transactions. If
   * payment reservation.
   */
  saleReferenceId?: string;
  /**
   * Information related to the software and hardware features of the Sale Terminal. If content is
   * not empty.
   */
  saleTerminalData?: SaleTerminalData1;
  /**
   * Type of token replacing the PAN of a payment card to identify the payment mean of the customer.
   * It allows, for a merchant, to use a token for a transaction only or for a longer period.
   * Possible values:
   * * **Customer**
   * * **Transaction**
   */
  tokenRequestedType?: TokenRequestedType1;
  /** Additional and optional identification of a customer order. */
  customerOrderId?: string;
  /**
   * List of customer order open, closed or both to be sent in the response messages. Possible
   * values:
   * * **Both**
   * * **Closed**
   * * **Open**
   */
  customerOrderReq?: CustomerOrderReq[];
  /** Sale information intended for the POI. Stored with the transaction. */
  saleToPoiData?: string;
  /** Sale information intended for the Acquirer. Send to the Acquirer if present. */
  saleToAcquirerData?: string;
  /** Sale information intended for the Issuer. Send to the Acquirer if present. */
  saleToIssuerData?: SaleToIssuerData1;
};

export const saleData1Schema: Schema<SaleData1> = s.object<SaleData1>({
  operatorId: s.optional(s.string()),
  operatorLanguage: s.optional(s.string()),
  shiftNumber: s.optional(s.string()),
  saleTransactionId: transactionIdType1Schema,
  saleReferenceId: s.optional(s.string()),
  saleTerminalData: s.optional(s.lazy(() => saleTerminalData1Schema)),
  tokenRequestedType: s.optional(s.lazy(() => tokenRequestedType1Schema)),
  customerOrderId: s.optional(s.string()),
  customerOrderReq: s.optional(s.array(s.lazy(() => customerOrderReqSchema))),
  saleToPoiData: s.optional(s.string()),
  saleToAcquirerData: s.optional(s.string()),
  saleToIssuerData: s.optional(s.lazy(() => saleToIssuerData1Schema)),
  _keysMap: {
    operatorId: "OperatorID",
    operatorLanguage: "OperatorLanguage",
    shiftNumber: "ShiftNumber",
    saleTransactionId: "SaleTransactionID",
    saleReferenceId: "SaleReferenceID",
    saleTerminalData: "SaleTerminalData",
    tokenRequestedType: "TokenRequestedType",
    customerOrderId: "CustomerOrderID",
    customerOrderReq: "CustomerOrderReq",
    saleToPoiData: "SaleToPOIData",
    saleToAcquirerData: "SaleToAcquirerData",
    saleToIssuerData: "SaleToIssuerData",
  },
});
