import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DetailsOfTokensThatAreNotStoredWithAdyen = {
  checkoutAttemptId?: string;
  expiryMonth?: string;
  expiryYear?: string;
  holderName?: string;
  number?: string;
  storedPaymentMethodId: string;
  subtype: "hilton";
  type: "externalToken";
};

export const detailsOfTokensThatAreNotStoredWithAdyenSchema: Schema<DetailsOfTokensThatAreNotStoredWithAdyen> =
  s.object<DetailsOfTokensThatAreNotStoredWithAdyen>({
    checkoutAttemptId: s.optional(s.string()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    holderName: s.optional(s.string()),
    number: s.optional(s.string()),
    storedPaymentMethodId: s.string(),
    subtype: s.literal("hilton"),
    type: s.literal("externalToken"),
  });
