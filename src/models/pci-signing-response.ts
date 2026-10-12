import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PciSigningResponse = {
  /** The unique identifiers of the signed PCI documents. */
  pciQuestionnaireIds?: string[];
  /**
   * The [legal entity
   * ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id)
   * of the individual who signed the PCI questionnaire.
   */
  signedBy?: string;
};

export const pciSigningResponseSchema: Schema<PciSigningResponse> = s.object<PciSigningResponse>({
  pciQuestionnaireIds: s.optional(s.array(s.string())),
  signedBy: s.optional(s.string()),
});
