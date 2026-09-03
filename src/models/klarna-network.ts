import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KlarnaNetwork = {
  checkoutAttemptId?: string;
  klarnaNetworkData?: string;
  klarnaNetworkSessionToken?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type: "klarna_network";
};

export const klarnaNetworkSchema: Schema<KlarnaNetwork> = s.object<KlarnaNetwork>({
  checkoutAttemptId: s.optional(s.string()),
  klarnaNetworkData: s.optional(s.string()),
  klarnaNetworkSessionToken: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.literal("klarna_network"),
});
