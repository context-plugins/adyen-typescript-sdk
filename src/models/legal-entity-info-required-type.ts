import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { individual1Schema, type Individual1 } from "./individual1.js";
import { legalEntityAssociationSchema, type LegalEntityAssociation } from "./legal-entity-association.js";
import { legalEntityCapabilitySchema, type LegalEntityCapability } from "./legal-entity-capability.js";
import { organization1Schema, type Organization1 } from "./organization1.js";
import { soleProprietorship1Schema, type SoleProprietorship1 } from "./sole-proprietorship1.js";
import { trust1Schema, type Trust1 } from "./trust1.js";
import { type353Schema, type Type353 } from "./type353.js";
import {
  unincorporatedPartnership1Schema,
  type UnincorporatedPartnership1,
} from "./unincorporated-partnership1.js";

export type LegalEntityInfoRequiredType = {
  capabilities?: Record<string, LegalEntityCapability>;
  entityAssociations?: LegalEntityAssociation[];
  individual?: Individual1;
  organization?: Organization1;
  reference?: string;
  soleProprietorship?: SoleProprietorship1;
  trust?: Trust1;
  type: Type353;
  unincorporatedPartnership?: UnincorporatedPartnership1;
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
    type: type353Schema,
    unincorporatedPartnership: s.optional(s.lazy(() => unincorporatedPartnership1Schema)),
    verificationPlan: s.optional(s.string()),
  });
