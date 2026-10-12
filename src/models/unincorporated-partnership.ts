import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address41Schema, type Address41 } from "./address41.js";
import { address51Schema, type Address51 } from "./address51.js";
import { taxInformationSchema, type TaxInformation } from "./tax-information.js";
import { type191Schema, type Type191 } from "./type191.js";
import { vatAbsenceReason1Schema, type VatAbsenceReason1 } from "./vat-absence-reason1.js";

export type UnincorporatedPartnership = {
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code of the governing country.
   */
  countryOfGoverningLaw: string;
  /** The date when the legal arrangement was incorporated in YYYY-MM-DD format. */
  dateOfIncorporation?: string;
  /** Short description about the Legal Arrangement. */
  description?: string;
  /** The registered name, if different from the `name`. */
  doingBusinessAs?: string;
  /** Set this to **true** if the legal arrangement does not have a `Doing business as` name. */
  doingBusinessAsAbsent?: boolean | null;
  /** The legal name. */
  name: string;
  /**
   * The business address. Required if the principal place of business is different from the
   * `registeredAddress`.
   */
  principalPlaceOfBusiness?: Address41;
  /** The address registered at the registrar, such as the Chamber of Commerce. */
  registeredAddress: Address51;
  /** The registration number. */
  registrationNumber?: string;
  /** The tax information of the entity. */
  taxInformation?: TaxInformation[];
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
  type?: Type191;
  /**
   * The reason for not providing a VAT number.
   *
   * Possible values: **industryExemption**, **belowTaxThreshold**.
   */
  vatAbsenceReason?: VatAbsenceReason1;
  /** The VAT number. */
  vatNumber?: string;
};

export const unincorporatedPartnershipSchema: Schema<UnincorporatedPartnership> =
  s.object<UnincorporatedPartnership>({
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
    type: s.optional(s.lazy(() => type191Schema)),
    vatAbsenceReason: s.optional(s.lazy(() => vatAbsenceReason1Schema)),
    vatNumber: s.optional(s.string()),
  });
