import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attachmentType1Schema, type AttachmentType1 } from "./attachment-type1.js";

export type DisputeAttachment = {
  /**
   * The type of information contained in the attachment: **receipt**, **correspondence**,
   * **other**.
   */
  attachmentType: AttachmentType1;
  /**
   * The content of the image. An attachment must be base64-encoded data. Make sure that all
   * base64-encoded data strings are generated without line breaks or "wrapping". For example, do
   * not use `Base64.NO_WRAP` in Java, or its equivalent in other languages. Newline characters at
   * the end of the base64-encoded data string will also result in a malformed input error.
   */
  content: string;
  /**
   * The name of the attachment, including its filename extension. Supported filename extensions:
   * **jpeg**, **pdf**, **tiff**.
   */
  fileName: string;
  /** The unique identifier of the attachment. */
  id?: string;
};

export const disputeAttachmentSchema: Schema<DisputeAttachment> = s.object<DisputeAttachment>({
  attachmentType: attachmentType1Schema,
  content: s.string(),
  fileName: s.string(),
  id: s.optional(s.string()),
});
