import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  storedPaymentMethodResourceSchema,
  type StoredPaymentMethodResource,
} from "./stored-payment-method-resource.js";

export type ListStoredPaymentMethodsResponse = {
  merchantAccount?: string;
  shopperReference?: string;
  storedPaymentMethods?: StoredPaymentMethodResource[];
};

export const listStoredPaymentMethodsResponseSchema: Schema<ListStoredPaymentMethodsResponse> =
  s.object<ListStoredPaymentMethodsResponse>({
    merchantAccount: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
    storedPaymentMethods: s.optional(s.array(s.lazy(() => storedPaymentMethodResourceSchema))),
  });
