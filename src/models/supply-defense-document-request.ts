import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defenseDocumentSchema, type DefenseDocument } from "./defense-document.js";

export type SupplyDefenseDocumentRequest = {
  defenseDocuments: DefenseDocument[];
  disputePspReference: string;
  merchantAccountCode: string;
};

export const supplyDefenseDocumentRequestSchema: Schema<SupplyDefenseDocumentRequest> =
  s.object<SupplyDefenseDocumentRequest>({
    defenseDocuments: s.array(s.lazy(() => defenseDocumentSchema)),
    disputePspReference: s.string(),
    merchantAccountCode: s.string(),
  });
