import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessDetails1Schema, type BusinessDetails1 } from "./business-details1.js";
import { individualDetails1Schema, type IndividualDetails1 } from "./individual-details1.js";
import { legalArrangementMemberSchema, type LegalArrangementMember } from "./legal-arrangement-member.js";
import { legalEntityTypeSchema, type LegalEntityType } from "./legal-entity-type.js";
import { viasAddress5Schema, type ViasAddress5 } from "./vias-address5.js";
import { viasPhoneNumber2Schema, type ViasPhoneNumber2 } from "./vias-phone-number2.js";

export type LegalArrangementEntityDetail = {
  address?: ViasAddress5;
  businessDetails?: BusinessDetails1;
  email?: string;
  fullPhoneNumber?: string;
  individualDetails?: IndividualDetails1;
  legalArrangementEntityCode?: string;
  legalArrangementEntityReference?: string;
  legalArrangementMembers?: LegalArrangementMember[];
  legalEntityType?: LegalEntityType;
  phoneNumber?: ViasPhoneNumber2;
  webAddress?: string;
};

export const legalArrangementEntityDetailSchema: Schema<LegalArrangementEntityDetail> =
  s.object<LegalArrangementEntityDetail>({
    address: s.optional(s.lazy(() => viasAddress5Schema)),
    businessDetails: s.optional(s.lazy(() => businessDetails1Schema)),
    email: s.optional(s.string()),
    fullPhoneNumber: s.optional(s.string()),
    individualDetails: s.optional(s.lazy(() => individualDetails1Schema)),
    legalArrangementEntityCode: s.optional(s.string()),
    legalArrangementEntityReference: s.optional(s.string()),
    legalArrangementMembers: s.optional(s.array(s.lazy(() => legalArrangementMemberSchema))),
    legalEntityType: s.optional(s.lazy(() => legalEntityTypeSchema)),
    phoneNumber: s.optional(s.lazy(() => viasPhoneNumber2Schema)),
    webAddress: s.optional(s.string()),
  });
