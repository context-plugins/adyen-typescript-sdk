import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type113Schema, type Type113 } from "./type113.js";

export type GetTermsOfServiceDocumentRequest = {
  language: string;
  termsOfServiceDocumentFormat?: string;
  type: Type113;
};

export const getTermsOfServiceDocumentRequestSchema: Schema<GetTermsOfServiceDocumentRequest> =
  s.object<GetTermsOfServiceDocumentRequest>({
    language: s.string(),
    termsOfServiceDocumentFormat: s.optional(s.string()),
    type: type113Schema,
  });
