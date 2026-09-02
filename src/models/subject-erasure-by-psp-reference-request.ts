import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubjectErasureByPspReferenceRequest = {
  forceErasure?: boolean;
  merchantAccount?: string;
  pspReference?: string;
};

export const subjectErasureByPspReferenceRequestSchema: Schema<SubjectErasureByPspReferenceRequest> =
  s.object<SubjectErasureByPspReferenceRequest>({
    forceErasure: s.optional(s.boolean()),
    merchantAccount: s.optional(s.string()),
    pspReference: s.optional(s.string()),
  });
