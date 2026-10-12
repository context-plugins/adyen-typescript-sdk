import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentInstrument1Schema, type PaymentInstrument1 } from "./payment-instrument1.js";

export type PaginatedPaymentInstrumentsResponse = {
  /** Indicates whether there are more items on the next page. */
  hasNext: boolean;
  /** Indicates whether there are more items on the previous page. */
  hasPrevious: boolean;
  /** List of payment instruments associated with the balance account. */
  paymentInstruments: PaymentInstrument1[];
};

export const paginatedPaymentInstrumentsResponseSchema: Schema<PaginatedPaymentInstrumentsResponse> =
  s.object<PaginatedPaymentInstrumentsResponse>({
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
    paymentInstruments: s.array(s.lazy(() => paymentInstrument1Schema)),
  });
