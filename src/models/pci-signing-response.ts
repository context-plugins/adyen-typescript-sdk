import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PciSigningResponse = {
  pciQuestionnaireIds?: string[];
  signedBy?: string;
};

export const pciSigningResponseSchema: Schema<PciSigningResponse> = s.object<PciSigningResponse>({
  pciQuestionnaireIds: s.optional(s.array(s.string())),
  signedBy: s.optional(s.string()),
});
