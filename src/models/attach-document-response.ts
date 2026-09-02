import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AttachDocumentResponse = {
  attachmentId?: string;
};

export const attachDocumentResponseSchema: Schema<AttachDocumentResponse> = s.object<AttachDocumentResponse>({
  attachmentId: s.optional(s.string()),
});
