import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { individual1Schema, type Individual1 } from "./individual1.js";
import { legalEntityAssociationSchema, type LegalEntityAssociation } from "./legal-entity-association.js";
import { legalEntityCapabilitySchema, type LegalEntityCapability } from "./legal-entity-capability.js";
import { organization1Schema, type Organization1 } from "./organization1.js";
import { soleProprietorship1Schema, type SoleProprietorship1 } from "./sole-proprietorship1.js";
import { trust1Schema, type Trust1 } from "./trust1.js";
import { type213Schema, type Type213 } from "./type213.js";
import {
  unincorporatedPartnership1Schema,
  type UnincorporatedPartnership1,
} from "./unincorporated-partnership1.js";

export type LegalEntityInfoRequiredType = {
  /**
   * Contains key-value pairs that specify the actions that the legal entity can do in your
   * platform.The key is a capability required for your integration. For example, **issueCard** for
   * Issuing. The value is an object containing the settings for the capability.
   */
  capabilities?: Record<string, LegalEntityCapability>;
  /**
   * List of legal entities associated with the current legal entity. For example, ultimate
   * beneficial owners associated with an organization through ownership or control, or as
   * signatories.
   */
  entityAssociations?: LegalEntityAssociation[];
  /** Information about the individual. Required if `type` is **individual**. */
  individual?: Individual1;
  /** Information about the organization. Required if `type` is **organization**. */
  organization?: Organization1;
  /** Your reference for the legal entity, maximum 150 characters. */
  reference?: string;
  /** Information about the sole proprietorship. Required if `type` is **soleProprietorship**. */
  soleProprietorship?: SoleProprietorship1;
  /** Information about the trust. Required if `type` is **trust**. */
  trust?: Trust1;
  /**
   * The type of legal entity.
   *
   * Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.
   */
  type: Type213;
  /**
   * Information about the unincorporated partnership. Required if `type` is
   * **unincorporatedPartnership**.
   */
  unincorporatedPartnership?: UnincorporatedPartnership1;
  /**
   * A key-value pair that specifies the verification process for a legal entity. Set to **upfront**
   * for upfront verification for
   * [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).
   */
  verificationPlan?: string;
};

export const legalEntityInfoRequiredTypeSchema: Schema<LegalEntityInfoRequiredType> =
  s.object<LegalEntityInfoRequiredType>({
    capabilities: s.optional(
      s.record(
        s.string(),
        s.lazy(() => legalEntityCapabilitySchema),
      ),
    ),
    entityAssociations: s.optional(s.array(s.lazy(() => legalEntityAssociationSchema))),
    individual: s.optional(s.lazy(() => individual1Schema)),
    organization: s.optional(s.lazy(() => organization1Schema)),
    reference: s.optional(s.string()),
    soleProprietorship: s.optional(s.lazy(() => soleProprietorship1Schema)),
    trust: s.optional(s.lazy(() => trust1Schema)),
    type: type213Schema,
    unincorporatedPartnership: s.optional(s.lazy(() => unincorporatedPartnership1Schema)),
    verificationPlan: s.optional(s.string()),
  });
