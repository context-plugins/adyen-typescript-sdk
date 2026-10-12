import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defenseDocumentSchema, type DefenseDocument } from "./defense-document.js";

export type SupplyDefenseDocumentRequest = {
  /** An array containing a list of the defense documents. */
  defenseDocuments: DefenseDocument[];
  /** The PSP reference assigned to the dispute. */
  disputePspReference: string;
  /** The merchant account identifier, for which you want to process the dispute transaction. */
  merchantAccountCode: string;
};

export const supplyDefenseDocumentRequestSchema: Schema<SupplyDefenseDocumentRequest> =
  s.object<SupplyDefenseDocumentRequest>({
    defenseDocuments: s.array(s.lazy(() => defenseDocumentSchema)),
    disputePspReference: s.string(),
    merchantAccountCode: s.string(),
  });
