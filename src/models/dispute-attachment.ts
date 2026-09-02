import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attachmentType1Schema, type AttachmentType1 } from "./attachment-type1.js";

export type DisputeAttachment = {
  attachmentType: AttachmentType1;
  content: string;
  fileName: string;
  id?: string;
};

export const disputeAttachmentSchema: Schema<DisputeAttachment> = s.object<DisputeAttachment>({
  attachmentType: attachmentType1Schema,
  content: s.string(),
  fileName: s.string(),
  id: s.optional(s.string()),
});
