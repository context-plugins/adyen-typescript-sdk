import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type303 = {
  AssociationIncorporated: "associationIncorporated",
  GovernmentalOrganization: "governmentalOrganization",
  ListedPublicCompany: "listedPublicCompany",
  NonProfit: "nonProfit",
  PartnershipIncorporated: "partnershipIncorporated",
  PrivateCompany: "privateCompany",
} as const;
export type Type303 = (typeof Type303)[keyof typeof Type303] | (string & {});

export const type303Schema: EnumSchema<Type303> = s.enumOf<Type303>(Type303);
