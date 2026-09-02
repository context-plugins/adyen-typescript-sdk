import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount11Schema, type Amount11 } from "./amount11.js";
import {
  checkoutForwardRequestCard2Schema,
  type CheckoutForwardRequestCard2,
} from "./checkout-forward-request-card2.js";
import {
  checkoutForwardRequestOptions2Schema,
  type CheckoutForwardRequestOptions2,
} from "./checkout-forward-request-options2.js";
import {
  checkoutOutgoingForwardRequest2Schema,
  type CheckoutOutgoingForwardRequest2,
} from "./checkout-outgoing-forward-request2.js";

export type CheckoutForwardRequest = {
  amount?: Amount11;
  baseUrl: string;
  merchantAccount: string;
  merchantReference?: string;
  options?: CheckoutForwardRequestOptions2;
  paymentMethod?: CheckoutForwardRequestCard2;
  request: CheckoutOutgoingForwardRequest2;
  shopperReference: string;
  storedPaymentMethodId?: string;
};

export const checkoutForwardRequestSchema: Schema<CheckoutForwardRequest> = s.object<CheckoutForwardRequest>({
  amount: s.optional(s.lazy(() => amount11Schema)),
  baseUrl: s.string(),
  merchantAccount: s.string(),
  merchantReference: s.optional(s.string()),
  options: s.optional(s.lazy(() => checkoutForwardRequestOptions2Schema)),
  paymentMethod: s.optional(s.lazy(() => checkoutForwardRequestCard2Schema)),
  request: checkoutOutgoingForwardRequest2Schema,
  shopperReference: s.string(),
  storedPaymentMethodId: s.optional(s.string()),
});
