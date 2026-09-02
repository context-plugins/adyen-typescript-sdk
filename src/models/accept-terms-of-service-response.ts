import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type113Schema, type Type113 } from "./type113.js";

export type AcceptTermsOfServiceResponse = {
  acceptedBy?: string;
  id?: string;
  ipAddress?: string;
  language?: string;
  termsOfServiceDocumentId?: string;
  type?: Type113;
};

export const acceptTermsOfServiceResponseSchema: Schema<AcceptTermsOfServiceResponse> =
  s.object<AcceptTermsOfServiceResponse>({
    acceptedBy: s.optional(s.string()),
    id: s.optional(s.string()),
    ipAddress: s.optional(s.string()),
    language: s.optional(s.string()),
    termsOfServiceDocumentId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type113Schema)),
  });
