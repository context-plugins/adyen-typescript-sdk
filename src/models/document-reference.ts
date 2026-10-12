import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentPageSchema, type DocumentPage } from "./document-page.js";

export type DocumentReference = {
  /** Identifies whether the document is active and used for checks. */
  active?: boolean;
  /** Your description for the document. */
  description?: string;
  /** Document name. */
  fileName?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The modification date of the document. */
  modificationDate?: Date;
  /** List of document pages */
  pages?: DocumentPage[];
  /** Type of document, used when providing an ID number or uploading a document. */
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
