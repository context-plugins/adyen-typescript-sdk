import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of organization.
 *
 * Possible values: **associationIncorporated**, **governmentalOrganization**,
 * **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
 */
export const Type161 = {
  AssociationIncorporated: "associationIncorporated",
  GovernmentalOrganization: "governmentalOrganization",
  ListedPublicCompany: "listedPublicCompany",
  NonProfit: "nonProfit",
  PartnershipIncorporated: "partnershipIncorporated",
  PrivateCompany: "privateCompany",
} as const;
export type Type161 = (typeof Type161)[keyof typeof Type161] | (string & {});

export const type161Schema: EnumSchema<Type161> = s.enumOf<Type161>(Type161);
