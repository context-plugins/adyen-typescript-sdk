import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { managementPaymentMethodSchema, type ManagementPaymentMethod } from "./management-payment-method.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { typesWithErrorSchema, type TypesWithError } from "./types-with-error.js";

export type PaymentMethodResponse = {
  links?: PaginationLinks1;
  data?: ManagementPaymentMethod[];
  itemsTotal: number;
  pagesTotal: number;
  typesWithErrors?: TypesWithError[];
};

export const paymentMethodResponseSchema: Schema<PaymentMethodResponse> = s.object<PaymentMethodResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => managementPaymentMethodSchema))),
  itemsTotal: s.number(),
  pagesTotal: s.number(),
  typesWithErrors: s.optional(s.array(s.lazy(() => typesWithErrorSchema))),
  _keysMap: {
    links: "_links",
  },
});
