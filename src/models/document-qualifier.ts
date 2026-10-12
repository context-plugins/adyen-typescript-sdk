import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **SaleReceipt**
 * * **CashierReceipt**
 * * **CustomerReceipt**
 * * **Document**
 * * **Voucher**
 * * **Journal**
 */
export const DocumentQualifier = {
  SaleReceipt: "SaleReceipt",
  CashierReceipt: "CashierReceipt",
  CustomerReceipt: "CustomerReceipt",
  Document: "Document",
  Voucher: "Voucher",
  Journal: "Journal",
} as const;
export type DocumentQualifier = (typeof DocumentQualifier)[keyof typeof DocumentQualifier] | (string & {});

export const documentQualifierSchema: EnumSchema<DocumentQualifier> =
  s.enumOf<DocumentQualifier>(DocumentQualifier);
