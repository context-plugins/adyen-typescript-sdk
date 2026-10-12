import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device4Schema, type Device4 } from "./device4.js";
import { infoQualify2Schema, type InfoQualify2 } from "./info-qualify2.js";
import { input2Schema, type Input2 } from "./input2.js";
import { response1Schema, type Response1 } from "./response1.js";

/** Contains the result and the content of the input. */
export type InputResult2 = {
  /**
   * Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information
   * to output (display, print or store), or input (keyboard) for the Cashier or the Customer.
   * Possible values:
   * * **CashierDisplay**
   * * **CashierInput**
   * * **CustomerDisplay**
   * * **CustomerInput**
   */
  device: Device4;
  /**
   * Qualification of the information to send to an output logical device, to display or print to
   * the Cashier or the Customer. Possible values:
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
  infoQualify: InfoQualify2;
  /**
   * Result of a message request processing. If Result is Success, `ErrorCondition` is absent or not
   * used in the processing of the message. In the other cases, the `ErrorCondition` has to be
   * present and can refine the processing of the message response. `AdditionalResponse` gives more
   * information about the success or the failure of the message request processing, for logging
   * without real time involvements.
   */
  response: Response1;
  /** Data entered by the user, related to the input command. */
  input?: Input2;
};

export const inputResult2Schema: Schema<InputResult2> = s.object<InputResult2>({
  device: device4Schema,
  infoQualify: infoQualify2Schema,
  response: response1Schema,
  input: s.optional(s.lazy(() => input2Schema)),
  _keysMap: {
    device: "Device",
    infoQualify: "InfoQualify",
    response: "Response",
    input: "Input",
  },
});
