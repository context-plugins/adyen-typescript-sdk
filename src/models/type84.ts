import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of document, used when providing an ID number or uploading a document. The possible values
 * depend on the legal entity type.
 *
 * * For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**,
 *   **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, **proofOfIndustry**,
 *   **proofOfSignatory**, **proofOfDirector**, or **proofOfFundingOrWealthSource**.
 *
 * * For **individual**, the `type` values can be **identityCard**, **driversLicense**,
 *   **passport**, **liveSelfie**, **proofOfNationalIdNumber**, **proofOfResidency**,
 *   **proofOfIndustry**, **proofOfIndividualTaxId**, **proofOfFundingOrWealthSource** or
 *   **proofOfRelationship**.
 *
 * * For **soleProprietorship**, the `type` values can be **constitutionalDocument**,
 *   **proofOfAddress**, or **proofOfIndustry**.
 *
 * * For **trust**, the `type` value is **constitutionalDocument**.
 *
 * * For **unincorporatedPartnership**, the `type` value is **constitutionalDocument**.
 *
 * * Use **bankStatement** to upload documents for a [transfer
 *   instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
 */
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
