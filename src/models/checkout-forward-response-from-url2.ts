import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of the response Adyen received from the third party. */
export type CheckoutForwardResponseFromUrl2 = {
  /** The body of the response Adyen received from the third party, in string format. */
  body?: string;
  /** The HTTP headers of the response Adyen received from the third party. */
  headers?: Record<string, string>;
  /** The HTTP status of the response Adyen received from the third party. */
  status?: number;
};

export const checkoutForwardResponseFromUrl2Schema: Schema<CheckoutForwardResponseFromUrl2> =
  s.object<CheckoutForwardResponseFromUrl2>({
    body: s.optional(s.string()),
    headers: s.optional(s.record(s.string(), s.string())),
    status: s.optional(s.int()),
  });
