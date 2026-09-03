import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type142Schema, type Type142 } from "./type142.js";

export type LegalEntityAssociation = {
  associatorId?: string;
  entityType?: string;
  jobTitle?: string;
  legalEntityId: string;
  name?: string;
  nominee?: boolean;
  relationship?: string;
  settlorExemptionReason?: string[];
  type: Type142;
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
  type: type142Schema,
});
