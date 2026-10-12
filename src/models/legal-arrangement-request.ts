import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LegalArrangementRequest = {
  /**
   * The code of the legal arrangement to be deleted. If you also send
   * `legalArrangementEntityCodes`, only the entities listed will be deleted.
   */
  legalArrangementCode: string;
  /** List of legal arrangement entities to be deleted. */
  legalArrangementEntityCodes?: string[];
};

export const legalArrangementRequestSchema: Schema<LegalArrangementRequest> =
  s.object<LegalArrangementRequest>({
    legalArrangementCode: s.string(),
    legalArrangementEntityCodes: s.optional(s.array(s.string())),
  });
