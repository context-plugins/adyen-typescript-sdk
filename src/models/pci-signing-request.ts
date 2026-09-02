import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PciSigningRequest = {
  pciTemplateReferences: string[];
  signedBy: string;
};

export const pciSigningRequestSchema: Schema<PciSigningRequest> = s.object<PciSigningRequest>({
  pciTemplateReferences: s.array(s.string()),
  signedBy: s.string(),
});
