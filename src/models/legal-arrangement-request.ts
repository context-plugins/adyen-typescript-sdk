import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LegalArrangementRequest = {
  legalArrangementCode: string;
  legalArrangementEntityCodes?: string[];
};

export const legalArrangementRequestSchema: Schema<LegalArrangementRequest> =
  s.object<LegalArrangementRequest>({
    legalArrangementCode: s.string(),
    legalArrangementEntityCodes: s.optional(s.array(s.string())),
  });
