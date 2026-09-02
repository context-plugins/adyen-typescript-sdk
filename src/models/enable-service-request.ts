import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutput2Schema, type DisplayOutput2 } from "./display-output2.js";
import { servicesEnabledSchema, type ServicesEnabled } from "./services-enabled.js";
import { transactionAction1Schema, type TransactionAction1 } from "./transaction-action1.js";

export type EnableServiceRequest = {
  transactionAction: TransactionAction1;
  servicesEnabled?: ServicesEnabled[];
  displayOutput?: DisplayOutput2;
};

export const enableServiceRequestSchema: Schema<EnableServiceRequest> = s.object<EnableServiceRequest>({
  transactionAction: transactionAction1Schema,
  servicesEnabled: s.optional(s.array(s.lazy(() => servicesEnabledSchema))),
  displayOutput: s.optional(s.lazy(() => displayOutput2Schema)),
  _keysMap: {
    transactionAction: "TransactionAction",
    servicesEnabled: "ServicesEnabled",
    displayOutput: "DisplayOutput",
  },
});
