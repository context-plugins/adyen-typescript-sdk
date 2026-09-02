import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentDetail1Schema, type DocumentDetail1 } from "./document-detail1.js";

export type UploadDocumentRequest = {
  documentContent: string;
  documentDetail: DocumentDetail1;
};

export const uploadDocumentRequestSchema: Schema<UploadDocumentRequest> = s.object<UploadDocumentRequest>({
  documentContent: s.string(),
  documentDetail: documentDetail1Schema,
});
