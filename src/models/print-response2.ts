import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentQualifier2Schema, type DocumentQualifier2 } from "./document-qualifier2.js";
import { response11Schema, type Response11 } from "./response11.js";

/** Content of the Print Response message. */
export type PrintResponse2 = {
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
  /** Result of a message request processing. */
  response: Response11;
};

export const printResponse2Schema: Schema<PrintResponse2> = s.object<PrintResponse2>({
  documentQualifier: documentQualifier2Schema,
  response: response11Schema,
  _keysMap: {
    documentQualifier: "DocumentQualifier",
    response: "Response",
  },
});
