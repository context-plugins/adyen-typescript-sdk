import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilityProblem1Schema, type CapabilityProblem1 } from "./capability-problem1.js";
import { documentReferenceSchema, type DocumentReference } from "./document-reference.js";
import { individual1Schema, type Individual1 } from "./individual1.js";
import { legalEntityAssociationSchema, type LegalEntityAssociation } from "./legal-entity-association.js";
import { legalEntityCapabilitySchema, type LegalEntityCapability } from "./legal-entity-capability.js";
import { organization1Schema, type Organization1 } from "./organization1.js";
import { soleProprietorship1Schema, type SoleProprietorship1 } from "./sole-proprietorship1.js";
import {
  transferInstrumentReferenceSchema,
  type TransferInstrumentReference,
} from "./transfer-instrument-reference.js";
import { trust1Schema, type Trust1 } from "./trust1.js";
import { type182Schema, type Type182 } from "./type182.js";
import {
  unincorporatedPartnership1Schema,
  type UnincorporatedPartnership1,
} from "./unincorporated-partnership1.js";
import {
  uploadAndroidAppResponseSchema,
  type UploadAndroidAppResponse,
} from "./upload-android-app-response.js";
import { verificationDeadlineSchema, type VerificationDeadline } from "./verification-deadline.js";

export type LegalEntity3 = {
  /**
   * Contains key-value pairs that specify the actions that the legal entity can do in your
   * platform.The key is a capability required for your integration. For example, **issueCard** for
   * Issuing. The value is an object containing the settings for the capability.
   */
  capabilities?: Record<string, LegalEntityCapability>;
  /** List of documents uploaded for the legal entity. */
  documentDetails?: DocumentReference[];
  /**
   * List of documents uploaded for the legal entity.
   *
   * @deprecated
   */
  documents?: UploadAndroidAppResponse[];
  /**
   * List of legal entities associated with the current legal entity. For example, ultimate
   * beneficial owners associated with an organization through ownership or control, or as
   * signatories.
   */
  entityAssociations?: LegalEntityAssociation[];
  /** The unique identifier of the legal entity. */
  id: string;
  /** Information about the individual. Required if `type` is **individual**. */
  individual?: Individual1;
  /** Information about the organization. Required if `type` is **organization**. */
  organization?: Organization1;
  /** List of verification errors related to capabilities for the legal entity. */
  problems?: CapabilityProblem1[];
  /** Your reference for the legal entity, maximum 150 characters. */
  reference?: string;
  /** Information about the sole proprietorship. Required if `type` is **soleProprietorship**. */
  soleProprietorship?: SoleProprietorship1;
  /** List of transfer instruments that the legal entity owns. */
  transferInstruments?: TransferInstrumentReference[];
  /** Information about the trust. Required if `type` is **trust**. */
  trust?: Trust1;
  /**
   * The type of legal entity.
   *
   * Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.
   */
  type?: Type182;
  /**
   * Information about the unincorporated partnership. Required if `type` is
   * **unincorporatedPartnership**.
   */
  unincorporatedPartnership?: UnincorporatedPartnership1;
  /**
   * List of verification deadlines and the capabilities that will be disallowed if verification
   * errors are not resolved.
   */
  verificationDeadlines?: VerificationDeadline[];
  /**
   * A key-value pair that specifies the verification process for a legal entity. Set to **upfront**
   * for upfront verification for
   * [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).
   */
  verificationPlan?: string;
};

export const legalEntity3Schema: Schema<LegalEntity3> = s.object<LegalEntity3>({
  capabilities: s.optional(
    s.record(
      s.string(),
      s.lazy(() => legalEntityCapabilitySchema),
    ),
  ),
  documentDetails: s.optional(s.array(s.lazy(() => documentReferenceSchema))),
  documents: s.optional(s.array(s.lazy(() => uploadAndroidAppResponseSchema))),
  entityAssociations: s.optional(s.array(s.lazy(() => legalEntityAssociationSchema))),
  id: s.string(),
  individual: s.optional(s.lazy(() => individual1Schema)),
  organization: s.optional(s.lazy(() => organization1Schema)),
  problems: s.optional(s.array(s.lazy(() => capabilityProblem1Schema))),
  reference: s.optional(s.string()),
  soleProprietorship: s.optional(s.lazy(() => soleProprietorship1Schema)),
  transferInstruments: s.optional(s.array(s.lazy(() => transferInstrumentReferenceSchema))),
  trust: s.optional(s.lazy(() => trust1Schema)),
  type: s.optional(s.lazy(() => type182Schema)),
  unincorporatedPartnership: s.optional(s.lazy(() => unincorporatedPartnership1Schema)),
  verificationDeadlines: s.optional(s.array(s.lazy(() => verificationDeadlineSchema))),
  verificationPlan: s.optional(s.string()),
});
