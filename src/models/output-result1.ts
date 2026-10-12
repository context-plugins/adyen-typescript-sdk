import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device3Schema, type Device3 } from "./device3.js";
import { infoQualify3Schema, type InfoQualify3 } from "./info-qualify3.js";
import { response11Schema, type Response11 } from "./response11.js";

/**
 * Information related to the result the output (display, print, input). If DisplayOutput present in
 * the request.
 */
export type OutputResult1 = {
  /**
   * Logical device located on a Sale Terminal or a POI Terminal, in term of class of information to
   * output (display, print or store), or input (keyboard) for the Cashier or the Customer. Copy.
   * Possible values:
   * * **CashierDisplay**
   * * **CashierInput**
   * * **CustomerDisplay**
   * * **CustomerInput**
   */
  device: Device3;
  /**
   * Qualification of the information to sent to an output logical device, to display or print to
   * the Cashier or the Customer. Copy. Possible values:
   * * **CustomerAssistance**
   * * **Display**
   * * **Document**
   * * **Error**
   * * **Input**
   * * **POIReplication**
   * * **Receipt**
   * * **Sound**
   * * **Status**
   * * **Voucher**
   */
  infoQualify: InfoQualify3;
  /** Result of a message request processing. */
  response: Response11;
};

export const outputResult1Schema: Schema<OutputResult1> = s.object<OutputResult1>({
  device: device3Schema,
  infoQualify: infoQualify3Schema,
  response: response11Schema,
  _keysMap: {
    device: "Device",
    infoQualify: "InfoQualify",
    response: "Response",
  },
});
