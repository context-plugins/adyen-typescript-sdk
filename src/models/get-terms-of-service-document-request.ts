import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type64Schema, type Type64 } from "./type64.js";

export type GetTermsOfServiceDocumentRequest = {
  language: string;
  termsOfServiceDocumentFormat?: string;
  type: Type64;
};

export const getTermsOfServiceDocumentRequestSchema: Schema<GetTermsOfServiceDocumentRequest> =
  s.object<GetTermsOfServiceDocumentRequest>({
    language: s.string(),
    termsOfServiceDocumentFormat: s.optional(s.string()),
    type: type64Schema,
  });
