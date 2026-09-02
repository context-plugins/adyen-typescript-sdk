import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attachment = {
  content: string;
  contentType?: string;
  filename?: string;
  pageName?: string;
  pageType?: string;
};

export const attachmentSchema: Schema<Attachment> = s.object<Attachment>({
  content: s.string(),
  contentType: s.optional(s.string()),
  filename: s.optional(s.string()),
  pageName: s.optional(s.string()),
  pageType: s.optional(s.string()),
});
