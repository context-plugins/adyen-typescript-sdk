import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Qualification of the document to print to the Cashier or the Customer. Allows the manager of the
 * printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type
 * accordingly. Possible values:
 * * **CashierReceipt**
 * * **CustomerReceipt**
 * * **Document**
 * * **Journal**
 * * **SaleReceipt**
 * * **Voucher**
 */
export const DocumentQualifier2 = {
  SaleReceipt: "SaleReceipt",
  CashierReceipt: "CashierReceipt",
  CustomerReceipt: "CustomerReceipt",
  Document: "Document",
  Voucher: "Voucher",
  Journal: "Journal",
} as const;
export type DocumentQualifier2 = (typeof DocumentQualifier2)[keyof typeof DocumentQualifier2] | (string & {});

export const documentQualifier2Schema: EnumSchema<DocumentQualifier2> =
  s.enumOf<DocumentQualifier2>(DocumentQualifier2);
