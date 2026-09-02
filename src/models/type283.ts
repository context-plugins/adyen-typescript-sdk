import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type283 = {
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
export type Type283 = (typeof Type283)[keyof typeof Type283] | (string & {});

export const type283Schema: EnumSchema<Type283> = s.enumOf<Type283>(Type283);
