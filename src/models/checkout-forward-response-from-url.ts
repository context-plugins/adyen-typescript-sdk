import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutForwardResponseFromUrl = {
  body?: string;
  headers?: Record<string, string>;
  status?: number;
};

export const checkoutForwardResponseFromUrlSchema: Schema<CheckoutForwardResponseFromUrl> =
  s.object<CheckoutForwardResponseFromUrl>({
    body: s.optional(s.string()),
    headers: s.optional(s.record(s.string(), s.string())),
    status: s.optional(s.number()),
  });
