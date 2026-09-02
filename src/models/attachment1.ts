import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attachment1 = {
  content: string;
  contentType?: string;
  filename?: string;
  pageName?: string;
  pageType?: string;
};

export const attachment1Schema: Schema<Attachment1> = s.object<Attachment1>({
  content: s.string(),
  contentType: s.optional(s.string()),
  filename: s.optional(s.string()),
  pageName: s.optional(s.string()),
  pageType: s.optional(s.string()),
});
