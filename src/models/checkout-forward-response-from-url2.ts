import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutForwardResponseFromUrl2 = {
  body?: string;
  headers?: Record<string, string>;
  status?: number;
};

export const checkoutForwardResponseFromUrl2Schema: Schema<CheckoutForwardResponseFromUrl2> =
  s.object<CheckoutForwardResponseFromUrl2>({
    body: s.optional(s.string()),
    headers: s.optional(s.record(s.string(), s.string())),
    status: s.optional(s.number()),
  });
