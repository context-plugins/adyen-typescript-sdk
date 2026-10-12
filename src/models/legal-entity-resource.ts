import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of Resource, LegalEntityResource. */
export type LegalEntityResource = {
  type?: string;
  /**
   * The unique identifier of the resource connected to the component. For [Onboarding
   * components](https://docs.adyen.com/platforms/onboard-users/components), this is the legal
   * entity that has a contractual relationship with your platform and owns the [transfer
   * instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).
   * For sole proprietorships, this is the legal entity of the individual owner.
   */
  legalEntityId: string;
};

export const legalEntityResourceSchema: Schema<LegalEntityResource> = s.object<LegalEntityResource>({
  type: s.optional(s.string()),
  legalEntityId: s.string(),
});
