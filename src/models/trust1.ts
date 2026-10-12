import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address41Schema, type Address41 } from "./address41.js";
import { address51Schema, type Address51 } from "./address51.js";
import { taxInformationSchema, type TaxInformation } from "./tax-information.js";
import { type171Schema, type Type171 } from "./type171.js";
import { undefinedBeneficiarySchema, type UndefinedBeneficiary } from "./undefined-beneficiary.js";
import { vatAbsenceReason1Schema, type VatAbsenceReason1 } from "./vat-absence-reason1.js";

/** Information about the trust. Required if `type` is **trust**. */
export type Trust1 = {
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code of the governing country.
   */
  countryOfGoverningLaw: string;
  /** The date when the legal arrangement was incorporated in YYYY-MM-DD format. */
  dateOfIncorporation?: string;
  /** A short description about the trust. Only applicable for charitable trusts in New Zealand. */
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
   * Type of trust.
   *
   * See possible values for trusts in
   * [Australia](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-australia)
   * and [New
   * Zealand](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-new-zealand).
   */
  type: Type171;
  /** The undefined beneficiary information of the entity. */
  undefinedBeneficiaryInfo?: UndefinedBeneficiary[];
  /**
   * The reason for not providing a VAT number.
   *
   * Possible values: **industryExemption**, **belowTaxThreshold**.
   */
  vatAbsenceReason?: VatAbsenceReason1;
  /** The VAT number. */
  vatNumber?: string;
};

export const trust1Schema: Schema<Trust1> = s.object<Trust1>({
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
  type: type171Schema,
  undefinedBeneficiaryInfo: s.optional(s.array(s.lazy(() => undefinedBeneficiarySchema))),
  vatAbsenceReason: s.optional(s.lazy(() => vatAbsenceReason1Schema)),
  vatNumber: s.optional(s.string()),
});
