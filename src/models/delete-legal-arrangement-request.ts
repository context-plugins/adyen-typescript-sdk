import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { legalArrangementRequestSchema, type LegalArrangementRequest } from "./legal-arrangement-request.js";

export type DeleteLegalArrangementRequest = {
  accountHolderCode: string;
  legalArrangements: LegalArrangementRequest[];
};

export const deleteLegalArrangementRequestSchema: Schema<DeleteLegalArrangementRequest> =
  s.object<DeleteLegalArrangementRequest>({
    accountHolderCode: s.string(),
    legalArrangements: s.array(s.lazy(() => legalArrangementRequestSchema)),
  });
