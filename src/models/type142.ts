import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
