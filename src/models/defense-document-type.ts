import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefenseDocumentType = {
  available: boolean;
  defenseDocumentTypeCode: string;
  requirementLevel: string;
};

export const defenseDocumentTypeSchema: Schema<DefenseDocumentType> = s.object<DefenseDocumentType>({
  available: s.boolean(),
  defenseDocumentTypeCode: s.string(),
  requirementLevel: s.string(),
});
