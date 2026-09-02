import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefenseDocument = {
  content: string;
  contentType: string;
  defenseDocumentTypeCode: string;
};

export const defenseDocumentSchema: Schema<DefenseDocument> = s.object<DefenseDocument>({
  content: s.string(),
  contentType: s.string(),
  defenseDocumentTypeCode: s.string(),
});
