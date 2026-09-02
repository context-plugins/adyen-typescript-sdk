import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerOrderReqSchema, type CustomerOrderReq } from "./customer-order-req.js";
import { saleTerminalData1Schema, type SaleTerminalData1 } from "./sale-terminal-data1.js";
import { saleToIssuerData1Schema, type SaleToIssuerData1 } from "./sale-to-issuer-data1.js";
import { tokenRequestedType1Schema, type TokenRequestedType1 } from "./token-requested-type1.js";
import { transactionIdType1Schema, type TransactionIdType1 } from "./transaction-id-type1.js";

export type SaleData6 = {
  operatorId?: string;
  operatorLanguage?: string;
  shiftNumber?: string;
  saleTransactionId: TransactionIdType1;
  saleReferenceId?: string;
  saleTerminalData?: SaleTerminalData1;
  tokenRequestedType?: TokenRequestedType1;
  customerOrderId?: string;
  customerOrderReq?: CustomerOrderReq[];
  saleToPoiData?: string;
  saleToAcquirerData?: string;
  saleToIssuerData?: SaleToIssuerData1;
};

export const saleData6Schema: Schema<SaleData6> = s.object<SaleData6>({
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
