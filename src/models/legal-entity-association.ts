import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type283Schema, type Type283 } from "./type283.js";

export type LegalEntityAssociation = {
  associatorId?: string;
  entityType?: string;
  jobTitle?: string;
  legalEntityId: string;
  name?: string;
  nominee?: boolean;
  relationship?: string;
  settlorExemptionReason?: string[];
  type: Type283;
};

export const legalEntityAssociationSchema: Schema<LegalEntityAssociation> = s.object<LegalEntityAssociation>({
  associatorId: s.optional(s.string()),
  entityType: s.optional(s.string()),
  jobTitle: s.optional(s.string()),
  legalEntityId: s.string(),
  name: s.optional(s.string()),
  nominee: s.optional(s.boolean()),
  relationship: s.optional(s.string()),
  settlorExemptionReason: s.optional(s.array(s.string())),
  type: type283Schema,
});
