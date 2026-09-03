import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address41Schema, type Address41 } from "./address41.js";
import { address51Schema, type Address51 } from "./address51.js";
import { taxInformationSchema, type TaxInformation } from "./tax-information.js";
import { type171Schema, type Type171 } from "./type171.js";
import { undefinedBeneficiarySchema, type UndefinedBeneficiary } from "./undefined-beneficiary.js";
import { vatAbsenceReason1Schema, type VatAbsenceReason1 } from "./vat-absence-reason1.js";

export type Trust1 = {
  countryOfGoverningLaw: string;
  dateOfIncorporation?: string;
  description?: string;
  doingBusinessAs?: string;
  doingBusinessAsAbsent?: boolean | null;
  name: string;
  principalPlaceOfBusiness?: Address41;
  registeredAddress: Address51;
  registrationNumber?: string;
  taxInformation?: TaxInformation[];
  type: Type171;
  undefinedBeneficiaryInfo?: UndefinedBeneficiary[];
  vatAbsenceReason?: VatAbsenceReason1;
  vatNumber?: string;
};

export const trust1Schema: Schema<Trust1> = s.object<Trust1>({
  countryOfGoverningLaw: s.string(),
  dateOfIncorporation: s.optional(s.string()),
  description: s.optional(s.string()),
  doingBusinessAs: s.optional(s.string()),
  doingBusinessAsAbsent: s.optionalNullable(s.boolean()),
  name: s.string(),
  principalPlaceOfBusiness: s.optional(s.lazy(() => address41Schema)),
  registeredAddress: address51Schema,
  registrationNumber: s.optional(s.string()),
  taxInformation: s.optional(s.array(s.lazy(() => taxInformationSchema))),
  type: type171Schema,
  undefinedBeneficiaryInfo: s.optional(s.array(s.lazy(() => undefinedBeneficiarySchema))),
  vatAbsenceReason: s.optional(s.lazy(() => vatAbsenceReason1Schema)),
  vatNumber: s.optional(s.string()),
});
