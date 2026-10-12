import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of Partnership.
 *
 * Possible values:
 * * **limitedPartnership**
 * * **generalPartnership**
 * * **familyPartnership**
 * * **commercialPartnership**
 * * **publicPartnership**
 * * **otherPartnership**
 * * **gbr**
 * * **gmbh**
 * * **kgaa**
 * * **cv**
 * * **vof**
 * * **maatschap**
 * * **privateFundLimitedPartnership**
 * * **businessTrustEntity**
 * * **businessPartnership**
 * * **limitedLiabilityPartnership**
 * * **eg**
 * * **cooperative**
 * * **vos**
 * * **comunidadDeBienes**
 * * **herenciaYacente**
 * * **comunidadDePropietarios**
 * * **sep**
 * * **sca**
 * * **bt**
 * * **kkt**
 * * **scs**
 * * **snc**
 */
export const Type191 = {
  LimitedPartnership: "limitedPartnership",
  GeneralPartnership: "generalPartnership",
  FamilyPartnership: "familyPartnership",
  CommercialPartnership: "commercialPartnership",
  PublicPartnership: "publicPartnership",
  OtherPartnership: "otherPartnership",
  Gbr: "gbr",
  Gmbh: "gmbh",
  Kgaa: "kgaa",
  Cv: "cv",
  Vof: "vof",
  Maatschap: "maatschap",
  PrivateFundLimitedPartnership: "privateFundLimitedPartnership",
  BusinessTrustEntity: "businessTrustEntity",
  BusinessPartnership: "businessPartnership",
  LimitedLiabilityPartnership: "limitedLiabilityPartnership",
  Eg: "eg",
  Cooperative: "cooperative",
  Vos: "vos",
  ComunidadDeBienes: "comunidadDeBienes",
  HerenciaYacente: "herenciaYacente",
  ComunidadDePropietarios: "comunidadDePropietarios",
  Sep: "sep",
  Sca: "sca",
  Bt: "bt",
  Kkt: "kkt",
  Scs: "scs",
  Snc: "snc",
} as const;
export type Type191 = (typeof Type191)[keyof typeof Type191] | (string & {});

export const type191Schema: EnumSchema<Type191> = s.enumOf<Type191>(Type191);
