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
import { type321Schema, type Type321 } from "./type321.js";
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
  capabilities?: Record<string, LegalEntityCapability>;
  documentDetails?: DocumentReference[];
  documents?: UploadAndroidAppResponse[];
  entityAssociations?: LegalEntityAssociation[];
  id: string;
  individual?: Individual1;
  organization?: Organization1;
  problems?: CapabilityProblem1[];
  reference?: string;
  soleProprietorship?: SoleProprietorship1;
  transferInstruments?: TransferInstrumentReference[];
  trust?: Trust1;
  type?: Type321;
  unincorporatedPartnership?: UnincorporatedPartnership1;
  verificationDeadlines?: VerificationDeadline[];
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
  type: s.optional(s.lazy(() => type321Schema)),
  unincorporatedPartnership: s.optional(s.lazy(() => unincorporatedPartnership1Schema)),
  verificationDeadlines: s.optional(s.array(s.lazy(() => verificationDeadlineSchema))),
  verificationPlan: s.optional(s.string()),
});
