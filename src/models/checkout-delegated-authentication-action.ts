import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type20Schema, type Type20 } from "./type20.js";

export type CheckoutDelegatedAuthenticationAction = {
  authorisationToken?: string;
  paymentData?: string;
  paymentMethodType?: string;
  token?: string;
  type: Type20;
  url?: string;
};

export const checkoutDelegatedAuthenticationActionSchema: Schema<CheckoutDelegatedAuthenticationAction> =
  s.object<CheckoutDelegatedAuthenticationAction>({
    authorisationToken: s.optional(s.string()),
    paymentData: s.optional(s.string()),
    paymentMethodType: s.optional(s.string()),
    token: s.optional(s.string()),
    type: type20Schema,
    url: s.optional(s.string()),
  });
