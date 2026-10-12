import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { legalArrangementRequestSchema, type LegalArrangementRequest } from "./legal-arrangement-request.js";

export type DeleteLegalArrangementRequest = {
  /** The code of the account holder. */
  accountHolderCode: string;
  /** List of legal arrangements. */
  legalArrangements: LegalArrangementRequest[];
};

export const deleteLegalArrangementRequestSchema: Schema<DeleteLegalArrangementRequest> =
  s.object<DeleteLegalArrangementRequest>({
    accountHolderCode: s.string(),
    legalArrangements: s.array(s.lazy(() => legalArrangementRequestSchema)),
  });
