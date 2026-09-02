import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { schemeSchema, type Scheme } from "./scheme.js";

export type SecureRemoteCommerceCheckoutData2 = {
  checkoutPayload?: string;
  correlationId?: string;
  cvc?: string;
  digitalCardId?: string;
  scheme?: Scheme;
  tokenReference?: string;
};

export const secureRemoteCommerceCheckoutData2Schema: Schema<SecureRemoteCommerceCheckoutData2> =
  s.object<SecureRemoteCommerceCheckoutData2>({
    checkoutPayload: s.optional(s.string()),
    correlationId: s.optional(s.string()),
    cvc: s.optional(s.string()),
    digitalCardId: s.optional(s.string()),
    scheme: s.optional(s.lazy(() => schemeSchema)),
    tokenReference: s.optional(s.string()),
  });
