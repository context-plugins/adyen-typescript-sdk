import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defenseDocumentTypeSchema, type DefenseDocumentType } from "./defense-document-type.js";

export type DefenseReason = {
  /**
   * Array of defense document types for a specific defense reason. Indicates the document types
   * that you can submit to the schemes to defend this dispute, and whether they are required.
   */
  defenseDocumentTypes?: DefenseDocumentType[];
  /** The defense reason code that was selected to defend this dispute. */
  defenseReasonCode: string;
  /** Indicates if sufficient defense material has been supplied. */
  satisfied: boolean;
};

export const defenseReasonSchema: Schema<DefenseReason> = s.object<DefenseReason>({
  defenseDocumentTypes: s.optional(s.array(s.lazy(() => defenseDocumentTypeSchema))),
  defenseReasonCode: s.string(),
  satisfied: s.boolean(),
});
