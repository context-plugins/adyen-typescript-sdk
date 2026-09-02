import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  legalArrangementEntityDetailSchema,
  type LegalArrangementEntityDetail,
} from "./legal-arrangement-entity-detail.js";
import { legalFormSchema, type LegalForm } from "./legal-form.js";
import { type110Schema, type Type110 } from "./type110.js";
import { viasAddress4Schema, type ViasAddress4 } from "./vias-address4.js";

export type LegalArrangementDetail = {
  address: ViasAddress4;
  legalArrangementCode?: string;
  legalArrangementEntities?: LegalArrangementEntityDetail[];
  legalArrangementReference?: string;
  legalForm?: LegalForm;
  name: string;
  registrationNumber?: string;
  taxNumber?: string;
  type: Type110;
};

export const legalArrangementDetailSchema: Schema<LegalArrangementDetail> = s.object<LegalArrangementDetail>({
  address: viasAddress4Schema,
  legalArrangementCode: s.optional(s.string()),
  legalArrangementEntities: s.optional(s.array(s.lazy(() => legalArrangementEntityDetailSchema))),
  legalArrangementReference: s.optional(s.string()),
  legalForm: s.optional(s.lazy(() => legalFormSchema)),
  name: s.string(),
  registrationNumber: s.optional(s.string()),
  taxNumber: s.optional(s.string()),
  type: type110Schema,
});
