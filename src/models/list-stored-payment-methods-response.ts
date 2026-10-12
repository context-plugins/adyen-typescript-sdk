import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  storedPaymentMethodResourceSchema,
  type StoredPaymentMethodResource,
} from "./stored-payment-method-resource.js";

export type ListStoredPaymentMethodsResponse = {
  /** Your merchant account. */
  merchantAccount?: string;
  /**
   * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum
   * length: 3 characters. > Your reference must not include personally identifiable information
   * (PII), for example name or email address.
   */
  shopperReference?: string;
  /** List of all stored payment methods. */
  storedPaymentMethods?: StoredPaymentMethodResource[];
};

export const listStoredPaymentMethodsResponseSchema: Schema<ListStoredPaymentMethodsResponse> =
  s.object<ListStoredPaymentMethodsResponse>({
    merchantAccount: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
    storedPaymentMethods: s.optional(s.array(s.lazy(() => storedPaymentMethodResourceSchema))),
  });
