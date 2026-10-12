import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KlarnaNetwork = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * A string containing a structured JSON object. This is a passthrough field used to enable custom
   * features or data exchange with Klarna.
   */
  klarnaNetworkData?: string;
  /** The token obtained from the Klarna SDK during an Express Checkout flow. */
  klarnaNetworkSessionToken?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **klarna_network** @default "klarna_network" */
  type?: "klarna_network";
};

export const klarnaNetworkSchema: Schema<KlarnaNetwork> = s.object<KlarnaNetwork>({
  checkoutAttemptId: s.optional(s.string()),
  klarnaNetworkData: s.optional(s.string()),
  klarnaNetworkSessionToken: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(s.literal("klarna_network"), "klarna_network"),
});
