import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentDetailSchema, type DocumentDetail } from "./document-detail.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type GetUploadedDocumentsResponse = {
  documentDetails?: DocumentDetail[];
  invalidFields?: ErrorFieldType[];
  pspReference?: string;
  resultCode?: string;
};

export const getUploadedDocumentsResponseSchema: Schema<GetUploadedDocumentsResponse> =
  s.object<GetUploadedDocumentsResponse>({
    documentDetails: s.optional(s.array(s.lazy(() => documentDetailSchema))),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });
