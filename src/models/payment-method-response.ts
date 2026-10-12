import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { managementPaymentMethodSchema, type ManagementPaymentMethod } from "./management-payment-method.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { typesWithErrorSchema, type TypesWithError } from "./types-with-error.js";

export type PaymentMethodResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** The list of supported payment methods and their details. */
  data?: ManagementPaymentMethod[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
  /**
   * The payment method types that were not successfully requested and their corresponding errors.
   */
  typesWithErrors?: TypesWithError[];
};

export const paymentMethodResponseSchema: Schema<PaymentMethodResponse> = s.object<PaymentMethodResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => managementPaymentMethodSchema))),
  itemsTotal: s.int(),
  pagesTotal: s.int(),
  typesWithErrors: s.optional(s.array(s.lazy(() => typesWithErrorSchema))),
  _keysMap: {
    links: "_links",
  },
});
