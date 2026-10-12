import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutput2Schema, type DisplayOutput2 } from "./display-output2.js";
import { servicesEnabledSchema, type ServicesEnabled } from "./services-enabled.js";
import { transactionAction1Schema, type TransactionAction1 } from "./transaction-action1.js";

/** Content of the Enable Service Request message. */
export type EnableServiceRequest2 = {
  /**
   * Action to realise on a transaction. In an `EnableService` request message:
   *   - Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.
   *   - Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a
   *     service request from the Sale System to complete the transaction. Possible values:
   * * **AbortTransaction**
   * * **StartTransaction**
   */
  transactionAction: TransactionAction1;
  /**
   * Services which are enabled before the start-up of a transaction. Mandatory if
   * `TransactionAction` is `StartTransaction`, absent if not. Possible values:
   * * **CardAcquisition**
   * * **Loyalty**
   * * **Payment**
   */
  servicesEnabled?: ServicesEnabled[];
  /** Information to display and the way to process the display. */
  displayOutput?: DisplayOutput2;
};

export const enableServiceRequest2Schema: Schema<EnableServiceRequest2> = s.object<EnableServiceRequest2>({
  transactionAction: transactionAction1Schema,
  servicesEnabled: s.optional(s.array(s.lazy(() => servicesEnabledSchema))),
  displayOutput: s.optional(s.lazy(() => displayOutput2Schema)),
  _keysMap: {
    transactionAction: "TransactionAction",
    servicesEnabled: "ServicesEnabled",
    displayOutput: "DisplayOutput",
  },
});
