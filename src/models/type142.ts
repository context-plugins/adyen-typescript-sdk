import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines the relationship of the legal entity to the current legal entity.
 *
 * Possible value for individuals: **legalRepresentative**.
 *
 * Possible values for organizations: **director**, **signatory**, **trustOwnership**,
 * **uboThroughOwnership**, **uboThroughControl**, **ultimateParentCompany**, or
 * **immediateParentCompany**.
 *
 * Possible values for sole proprietorships: **soleProprietorship**.
 *
 * Possible value for trusts: **trust**.
 *
 * Possible values for trust members: **definedBeneficiary**, **protector**, **secondaryTrustee**,
 * **settlor**, **uboThroughControl**, or **uboThroughOwnership**.
 *
 * Possible value for unincorporated partnership: **unincorporatedPartnership**.
 *
 * Possible values for unincorporated partnership members: **secondaryPartner**,
 * **uboThroughControl**, **uboThroughOwnership**
 */
export const Type142 = {
  DefinedBeneficiary: "definedBeneficiary",
  Director: "director",
  ImmediateParentCompany: "immediateParentCompany",
  LegalRepresentative: "legalRepresentative",
  PciSignatory: "pciSignatory",
  Protector: "protector",
  SecondaryPartner: "secondaryPartner",
  SecondaryTrustee: "secondaryTrustee",
  Settlor: "settlor",
  Signatory: "signatory",
  SoleProprietorship: "soleProprietorship",
  Trust: "trust",
  TrustOwnership: "trustOwnership",
  UboThroughControl: "uboThroughControl",
  UboThroughOwnership: "uboThroughOwnership",
  UltimateParentCompany: "ultimateParentCompany",
  UndefinedBeneficiary: "undefinedBeneficiary",
  UnincorporatedPartnership: "unincorporatedPartnership",
} as const;
export type Type142 = (typeof Type142)[keyof typeof Type142] | (string & {});

export const type142Schema: EnumSchema<Type142> = s.enumOf<Type142>(Type142);
