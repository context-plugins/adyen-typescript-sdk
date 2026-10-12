import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type132Schema, type Type132 } from "./type132.js";

/** Information about the individual's identification document. */
export type IdentificationData1 = {
  /** The card number of the document that was issued (AU only). */
  cardNumber?: string;
  /** The expiry date of the document, in YYYY-MM-DD format. */
  expiryDate?: string;
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code where the document was issued. For example, **US**.
   *
   * @deprecated
   */
  issuerCountry?: string;
  /** The state or province where the document was issued (AU only). */
  issuerState?: string;
  /**
   * Applies only to individuals in the US. Set to **true** if the individual does not have an SSN.
   * To verify their identity, Adyen will require them to upload an ID document.
   */
  nationalIdExempt?: boolean;
  /** The number in the document. */
  number?: string;
  /**
   * Type of identity data. For individuals, the following types are supported. See our [onboarding
   * guide](https://docs.adyen.com/platforms/onboard-users/onboarding-steps/?onboarding_type=custom)
   * for other supported countries.
   *
   * - Australia: **driversLicense**, **passport**
   *
   * - Hong Kong: **driversLicense**, **nationalIdNumber**, **passport**
   *
   * - New Zealand: **driversLicense**, **passport**
   *
   * - Singapore: **driversLicense**, **nationalIdNumber**, **passport**
   *
   * - All other supported countries: **nationalIdNumber**
   */
  type: Type132;
};

export const identificationData1Schema: Schema<IdentificationData1> = s.object<IdentificationData1>({
  cardNumber: s.optional(s.string()),
  expiryDate: s.optional(s.string()),
  issuerCountry: s.optional(s.string()),
  issuerState: s.optional(s.string()),
  nationalIdExempt: s.optional(s.boolean()),
  number: s.optional(s.string()),
  type: type132Schema,
});
