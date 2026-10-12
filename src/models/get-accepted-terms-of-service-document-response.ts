import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  termsOfServiceDocumentFormatSchema,
  type TermsOfServiceDocumentFormat,
} from "./terms-of-service-document-format.js";

export type GetAcceptedTermsOfServiceDocumentResponse = {
  /**
   * The accepted Terms of Service document in the requested format represented as a Base64-encoded
   * bytes array.
   */
  document?: string;
  /** The unique identifier of the legal entity. */
  id?: string;
  /** An Adyen-generated reference for the accepted Terms of Service. */
  termsOfServiceAcceptanceReference?: string;
  /** The format of the Terms of Service document. */
  termsOfServiceDocumentFormat?: TermsOfServiceDocumentFormat;
};

export const getAcceptedTermsOfServiceDocumentResponseSchema: Schema<GetAcceptedTermsOfServiceDocumentResponse> =
  s.object<GetAcceptedTermsOfServiceDocumentResponse>({
    document: s.optional(s.string()),
    id: s.optional(s.string()),
    termsOfServiceAcceptanceReference: s.optional(s.string()),
    termsOfServiceDocumentFormat: s.optional(s.lazy(() => termsOfServiceDocumentFormatSchema)),
  });
