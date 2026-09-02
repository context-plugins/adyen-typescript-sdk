import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutForwardResponseFromUrl2Schema,
  type CheckoutForwardResponseFromUrl2,
} from "./checkout-forward-response-from-url2.js";

export type CheckoutForwardResponse = {
  merchantReference?: string;
  pspReference?: string;
  response: CheckoutForwardResponseFromUrl2;
  storedPaymentMethodId?: string;
};

export const checkoutForwardResponseSchema: Schema<CheckoutForwardResponse> =
  s.object<CheckoutForwardResponse>({
    merchantReference: s.optional(s.string()),
    pspReference: s.optional(s.string()),
    response: checkoutForwardResponseFromUrl2Schema,
    storedPaymentMethodId: s.optional(s.string()),
  });
