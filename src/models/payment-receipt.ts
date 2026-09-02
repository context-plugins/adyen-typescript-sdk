import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentQualifier1Schema, type DocumentQualifier1 } from "./document-qualifier1.js";
import { outputContent1Schema, type OutputContent1 } from "./output-content1.js";

export type PaymentReceipt = {
  documentQualifier: DocumentQualifier1;
  integratedPrintFlag?: boolean;
  requiredSignatureFlag?: boolean;
  outputContent: OutputContent1;
};

export const paymentReceiptSchema: Schema<PaymentReceipt> = s.object<PaymentReceipt>({
  documentQualifier: documentQualifier1Schema,
  integratedPrintFlag: s.optional(s.boolean()),
  requiredSignatureFlag: s.optional(s.boolean()),
  outputContent: outputContent1Schema,
  _keysMap: {
    documentQualifier: "DocumentQualifier",
    integratedPrintFlag: "IntegratedPrintFlag",
    requiredSignatureFlag: "RequiredSignatureFlag",
    outputContent: "OutputContent",
  },
});
