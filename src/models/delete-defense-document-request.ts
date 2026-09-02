import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteDefenseDocumentRequest = {
  defenseDocumentType: string;
  disputePspReference: string;
  merchantAccountCode: string;
};

export const deleteDefenseDocumentRequestSchema: Schema<DeleteDefenseDocumentRequest> =
  s.object<DeleteDefenseDocumentRequest>({
    defenseDocumentType: s.string(),
    disputePspReference: s.string(),
    merchantAccountCode: s.string(),
  });
