import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LegalEntityResource = {
  type?: string;
  legalEntityId: string;
};

export const legalEntityResourceSchema: Schema<LegalEntityResource> = s.object<LegalEntityResource>({
  type: s.optional(s.string()),
  legalEntityId: s.string(),
});
