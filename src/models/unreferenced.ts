import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Unreferenced = {
  /**
   * Indicates whether unreferenced refunds are enabled on the terminal.
   *
   * > You're fully liable for losses resulting from fraudulent or duplicate unreferenced refunds.
   * We recommend that you [set an unreferenced refund limit and a refund
   * delay](https://docs.adyen.com/point-of-sale/basic-tapi-integration/refund-payment/unreferenced/#risk-with-unreferenced-refunds)
   * to reduce this risk.
   */
  enableUnreferencedRefunds?: boolean;
};

export const unreferencedSchema: Schema<Unreferenced> = s.object<Unreferenced>({
  enableUnreferencedRefunds: s.optional(s.boolean()),
});
