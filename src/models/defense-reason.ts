import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defenseDocumentTypeSchema, type DefenseDocumentType } from "./defense-document-type.js";

export type DefenseReason = {
  defenseDocumentTypes?: DefenseDocumentType[];
  defenseReasonCode: string;
  satisfied: boolean;
};

export const defenseReasonSchema: Schema<DefenseReason> = s.object<DefenseReason>({
  defenseDocumentTypes: s.optional(s.array(s.lazy(() => defenseDocumentTypeSchema))),
  defenseReasonCode: s.string(),
  satisfied: s.boolean(),
});
