import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentQualifier1Schema, type DocumentQualifier1 } from "./document-qualifier1.js";
import { outputContent1Schema, type OutputContent1 } from "./output-content1.js";

/**
 * Customer or Merchant payment receipt. If the payment receipts are printed by the Sale system and
 * the POI or the Sale does not implement the Print exchange (Basic profile).
 */
export type PaymentReceipt = {
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
  documentQualifier: DocumentQualifier1;
  /** Type of the print integrated to other prints. */
  integratedPrintFlag?: boolean;
  /**
   * Indicate that the cardholder payment receipt requires a physical signature by the Customer.
   *
   * @default false
   */
  requiredSignatureFlag?: boolean;
  /** Content to display or print. */
  outputContent: OutputContent1;
};

export const paymentReceiptSchema: Schema<PaymentReceipt> = s.object<PaymentReceipt>({
  documentQualifier: documentQualifier1Schema,
  integratedPrintFlag: s.optional(s.boolean()),
  requiredSignatureFlag: s.defaulted(s.boolean(), false),
  outputContent: outputContent1Schema,
  _keysMap: {
    documentQualifier: "DocumentQualifier",
    integratedPrintFlag: "IntegratedPrintFlag",
    requiredSignatureFlag: "RequiredSignatureFlag",
    outputContent: "OutputContent",
  },
});
