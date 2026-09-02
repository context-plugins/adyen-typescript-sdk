import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetPciQuestionnaireResponse = {
  content?: string;
  createdAt?: Date;
  id?: string;
  validUntil?: Date;
};

export const getPciQuestionnaireResponseSchema: Schema<GetPciQuestionnaireResponse> =
  s.object<GetPciQuestionnaireResponse>({
    content: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    id: s.optional(s.string()),
    validUntil: s.optional(s.dateTime()),
  });
