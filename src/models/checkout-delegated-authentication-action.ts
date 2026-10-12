import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutDelegatedAuthenticationAction = {
  /** A token needed to authorise a payment. */
  authorisationToken?: string;
  /** Encoded payment data. */
  paymentData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** A token to pass to the delegatedAuthentication component. */
  token?: string;
  /** **delegatedAuthentication** @default "delegatedAuthentication" */
  type?: "delegatedAuthentication";
  /** Specifies the URL to redirect to. */
  url?: string;
};

export const checkoutDelegatedAuthenticationActionSchema: Schema<CheckoutDelegatedAuthenticationAction> =
  s.object<CheckoutDelegatedAuthenticationAction>({
    authorisationToken: s.optional(s.string()),
    paymentData: s.optional(s.string()),
    paymentMethodType: s.optional(s.string()),
    token: s.optional(s.string()),
    type: s.defaulted(s.literal("delegatedAuthentication"), "delegatedAuthentication"),
    url: s.optional(s.string()),
  });
