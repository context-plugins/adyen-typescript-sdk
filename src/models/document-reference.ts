import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentPageSchema, type DocumentPage } from "./document-page.js";

export type DocumentReference = {
  active?: boolean;
  description?: string;
  fileName?: string;
  id?: string;
  modificationDate?: Date;
  pages?: DocumentPage[];
  type?: string;
};

export const documentReferenceSchema: Schema<DocumentReference> = s.object<DocumentReference>({
  active: s.optional(s.boolean()),
  description: s.optional(s.string()),
  fileName: s.optional(s.string()),
  id: s.optional(s.string()),
  modificationDate: s.optional(s.dateTime()),
  pages: s.optional(s.array(s.lazy(() => documentPageSchema))),
  type: s.optional(s.string()),
});
