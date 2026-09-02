import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  termsOfServiceDocumentFormatSchema,
  type TermsOfServiceDocumentFormat,
} from "./terms-of-service-document-format.js";

export type GetAcceptedTermsOfServiceDocumentResponse = {
  document?: string;
  id?: string;
  termsOfServiceAcceptanceReference?: string;
  termsOfServiceDocumentFormat?: TermsOfServiceDocumentFormat;
};

export const getAcceptedTermsOfServiceDocumentResponseSchema: Schema<GetAcceptedTermsOfServiceDocumentResponse> =
  s.object<GetAcceptedTermsOfServiceDocumentResponse>({
    document: s.optional(s.string()),
    id: s.optional(s.string()),
    termsOfServiceAcceptanceReference: s.optional(s.string()),
    termsOfServiceDocumentFormat: s.optional(s.lazy(() => termsOfServiceDocumentFormatSchema)),
  });
