import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type223 = {
  BankStatement: "bankStatement",
  DriversLicense: "driversLicense",
  IdentityCard: "identityCard",
  NationalIdNumber: "nationalIdNumber",
  Passport: "passport",
  ProofOfAddress: "proofOfAddress",
  ProofOfNationalIdNumber: "proofOfNationalIdNumber",
  ProofOfResidency: "proofOfResidency",
  RegistrationDocument: "registrationDocument",
  VatDocument: "vatDocument",
  ProofOfOrganizationTaxInfo: "proofOfOrganizationTaxInfo",
  ProofOfIndividualTaxId: "proofOfIndividualTaxId",
  ProofOfOwnership: "proofOfOwnership",
  ProofOfSignatory: "proofOfSignatory",
  LiveSelfie: "liveSelfie",
  ProofOfIndustry: "proofOfIndustry",
  ConstitutionalDocument: "constitutionalDocument",
  ProofOfFundingOrWealthSource: "proofOfFundingOrWealthSource",
  ProofOfRelationship: "proofOfRelationship",
  ProofOfDirector: "proofOfDirector",
} as const;
export type Type223 = (typeof Type223)[keyof typeof Type223] | (string & {});

export const type223Schema: EnumSchema<Type223> = s.enumOf<Type223>(Type223);
