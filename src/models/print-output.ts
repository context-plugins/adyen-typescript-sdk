import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentQualifier2Schema, type DocumentQualifier2 } from "./document-qualifier2.js";
import { outputContent3Schema, type OutputContent3 } from "./output-content3.js";
import { responseMode1Schema, type ResponseMode1 } from "./response-mode1.js";

export type PrintOutput = {
  /**
   * Qualification of the document to print to the Cashier or the Customer. Allows the manager of
   * the printer, Sale or POI Terminal, to send information to a physical printer or to use the
   * paper type accordingly. Possible values:
   * * **CashierReceipt**
   * * **CustomerReceipt**
   * * **Document**
   * * **Journal**
   * * **SaleReceipt**
   * * **Voucher**
   */
  documentQualifier: DocumentQualifier2;
  /**
   * Message response awaited by the initiator of the Request. Allows various types and
   * synchronisation of requests for Print or Sound. Possible values:
   * * **Immediate**
   * * **NotRequired**
   * * **PrintEnd**
   * * **SoundEnd**
   */
  responseMode: ResponseMode1;
  /**
   * Type of the print integrated in other prints. Allows a separated printing (paper cut if
   * available), or integration with the sale receipt or other print. If the printing is integrated,
   * the response is always immediate, even if the `ResponseMode` is set to `PrintEnd`.
   *
   * @default false
   */
  integratedPrintFlag?: boolean;
  /**
   * Indicates that the cardholder payment receipt requires a physical signature by the Customer.
   *
   * @default false
   */
  requiredSignatureFlag?: boolean;
  /** Content to display or print. This is a sequence of elements if they have different formats. */
  outputContent: OutputContent3;
};

export const printOutputSchema: Schema<PrintOutput> = s.object<PrintOutput>({
  documentQualifier: documentQualifier2Schema,
  responseMode: responseMode1Schema,
  integratedPrintFlag: s.defaulted(s.boolean(), false),
  requiredSignatureFlag: s.defaulted(s.boolean(), false),
  outputContent: outputContent3Schema,
  _keysMap: {
    documentQualifier: "DocumentQualifier",
    responseMode: "ResponseMode",
    integratedPrintFlag: "IntegratedPrintFlag",
    requiredSignatureFlag: "RequiredSignatureFlag",
    outputContent: "OutputContent",
  },
});
