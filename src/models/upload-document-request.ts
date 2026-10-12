import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentDetail1Schema, type DocumentDetail1 } from "./document-detail1.js";

export type UploadDocumentRequest = {
  /**
   * The content of the document, in Base64-encoded string format.
   *
   * To learn about document requirements, refer to [Verification
   * checks](https://docs.adyen.com/classic-platforms/verification-checks).
   */
  documentContent: string;
  /** Details of the document being submitted. */
  documentDetail: DocumentDetail1;
};

export const uploadDocumentRequestSchema: Schema<UploadDocumentRequest> = s.object<UploadDocumentRequest>({
  documentContent: s.string(),
  documentDetail: documentDetail1Schema,
});
