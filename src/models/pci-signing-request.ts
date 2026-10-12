import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PciSigningRequest = {
  /** The array of Adyen-generated unique identifiers for the questionnaires. */
  pciTemplateReferences: string[];
  /**
   * The [legal entity
   * ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id)
   * of the individual who signs the PCI questionnaire.
   */
  signedBy: string;
};

export const pciSigningRequestSchema: Schema<PciSigningRequest> = s.object<PciSigningRequest>({
  pciTemplateReferences: s.array(s.string()),
  signedBy: s.string(),
});
