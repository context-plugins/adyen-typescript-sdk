import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpMethodSchema, type HttpMethod } from "./http-method.js";

export type CheckoutOutgoingForwardRequest2 = {
  body: string;
  credentials?: string;
  headers?: Record<string, string>;
  httpMethod: HttpMethod;
  urlSuffix?: string;
};

export const checkoutOutgoingForwardRequest2Schema: Schema<CheckoutOutgoingForwardRequest2> =
  s.object<CheckoutOutgoingForwardRequest2>({
    body: s.string(),
    credentials: s.optional(s.string()),
    headers: s.optional(s.record(s.string(), s.string())),
    httpMethod: httpMethodSchema,
    urlSuffix: s.optional(s.string()),
  });
