import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Qualification of the document to print to the Cashier or the Customer. SaleReceipt or
 * CashierReceipt. Possible values:
 * * **CashierReceipt**
 * * **CustomerReceipt**
 * * **Document**
 * * **Journal**
 * * **SaleReceipt**
 * * **Voucher**
 */
export const DocumentQualifier1 = {
  SaleReceipt: "SaleReceipt",
  CashierReceipt: "CashierReceipt",
  CustomerReceipt: "CustomerReceipt",
  Document: "Document",
  Voucher: "Voucher",
  Journal: "Journal",
} as const;
export type DocumentQualifier1 = (typeof DocumentQualifier1)[keyof typeof DocumentQualifier1] | (string & {});

export const documentQualifier1Schema: EnumSchema<DocumentQualifier1> =
  s.enumOf<DocumentQualifier1>(DocumentQualifier1);
