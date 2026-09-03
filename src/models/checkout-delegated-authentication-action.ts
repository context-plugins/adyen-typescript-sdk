import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutDelegatedAuthenticationAction = {
  authorisationToken?: string;
  paymentData?: string;
  paymentMethodType?: string;
  token?: string;
  type: "delegatedAuthentication";
  url?: string;
};

export const checkoutDelegatedAuthenticationActionSchema: Schema<CheckoutDelegatedAuthenticationAction> =
  s.object<CheckoutDelegatedAuthenticationAction>({
    authorisationToken: s.optional(s.string()),
    paymentData: s.optional(s.string()),
    paymentMethodType: s.optional(s.string()),
    token: s.optional(s.string()),
    type: s.literal("delegatedAuthentication"),
    url: s.optional(s.string()),
  });
