import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteDefenseDocumentRequest = {
  /** The document type code of the defense document. */
  defenseDocumentType: string;
  /** The PSP reference assigned to the dispute. */
  disputePspReference: string;
  /** The merchant account identifier, for which you want to process the dispute transaction. */
  merchantAccountCode: string;
};

export const deleteDefenseDocumentRequestSchema: Schema<DeleteDefenseDocumentRequest> =
  s.object<DeleteDefenseDocumentRequest>({
    defenseDocumentType: s.string(),
    disputePspReference: s.string(),
    merchantAccountCode: s.string(),
  });
