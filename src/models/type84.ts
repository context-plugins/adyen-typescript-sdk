import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type84 = {
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
export type Type84 = (typeof Type84)[keyof typeof Type84] | (string & {});

export const type84Schema: EnumSchema<Type84> = s.enumOf<Type84>(Type84);
