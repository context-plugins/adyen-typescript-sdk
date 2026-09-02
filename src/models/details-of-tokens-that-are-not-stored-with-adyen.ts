import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subtypeSchema, type Subtype } from "./subtype.js";
import { type40Schema, type Type40 } from "./type40.js";

export type DetailsOfTokensThatAreNotStoredWithAdyen = {
  checkoutAttemptId?: string;
  expiryMonth?: string;
  expiryYear?: string;
  holderName?: string;
  number?: string;
  storedPaymentMethodId: string;
  subtype: Subtype;
  type: Type40;
};

export const detailsOfTokensThatAreNotStoredWithAdyenSchema: Schema<DetailsOfTokensThatAreNotStoredWithAdyen> =
  s.object<DetailsOfTokensThatAreNotStoredWithAdyen>({
    checkoutAttemptId: s.optional(s.string()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    holderName: s.optional(s.string()),
    number: s.optional(s.string()),
    storedPaymentMethodId: s.string(),
    subtype: subtypeSchema,
    type: type40Schema,
  });
