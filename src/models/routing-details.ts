import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priority1Schema, type Priority1 } from "./priority1.js";

export type RoutingDetails = {
  /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** A code that identifies the problem type. */
  errorCode?: string;
  /**
   * The priority for the bank transfer. This sets the speed at which the transfer is sent and the
   * fees that you have to pay. Required for transfers with `category` **bank**.
   *
   * Possible values:
   *
   * * **regular**: For normal, low-value transactions.
   *
   * * **fast**: A faster way to transfer funds, but the fees are higher. Recommended for
   *   high-priority, low-value transactions.
   *
   * * **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for
   *   high-priority, high-value transactions.
   *
   * * **instant**: For instant funds transfers within the United States and in [SEPA
   *   locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).
   *
   * * **crossBorder**: For high-value transfers to a recipient in a different country.
   *
   * * **internal**: For transfers to an Adyen-issued business bank account (by bank account
   *   number/IBAN).
   */
  priority?: Priority1;
  /** A short, human-readable summary of the problem type. */
  title?: string;
};

export const routingDetailsSchema: Schema<RoutingDetails> = s.object<RoutingDetails>({
  detail: s.optional(s.string()),
  errorCode: s.optional(s.string()),
  priority: s.optional(s.lazy(() => priority1Schema)),
  title: s.optional(s.string()),
});
