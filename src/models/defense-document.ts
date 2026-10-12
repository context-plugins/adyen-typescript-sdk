import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefenseDocument = {
  /** The content of the defense document. */
  content: string;
  /** The content type of the defense document. */
  contentType: string;
  /** The document type code of the defense document. */
  defenseDocumentTypeCode: string;
};

export const defenseDocumentSchema: Schema<DefenseDocument> = s.object<DefenseDocument>({
  content: s.string(),
  contentType: s.string(),
  defenseDocumentTypeCode: s.string(),
});
