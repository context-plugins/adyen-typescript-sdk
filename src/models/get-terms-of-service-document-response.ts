import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type64Schema, type Type64 } from "./type64.js";

export type GetTermsOfServiceDocumentResponse = {
  document?: string;
  id?: string;
  language?: string;
  termsOfServiceDocumentFormat?: string;
  termsOfServiceDocumentId?: string;
  type?: Type64;
};

export const getTermsOfServiceDocumentResponseSchema: Schema<GetTermsOfServiceDocumentResponse> =
  s.object<GetTermsOfServiceDocumentResponse>({
    document: s.optional(s.string()),
    id: s.optional(s.string()),
    language: s.optional(s.string()),
    termsOfServiceDocumentFormat: s.optional(s.string()),
    termsOfServiceDocumentId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type64Schema)),
  });
