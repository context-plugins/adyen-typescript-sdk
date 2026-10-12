import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataSubMerchant = {
  /**
   * Required for transactions performed by registered payment facilitators. Indicates the number of
   * sub-merchants contained in the request. For example, **3**.
   */
  subMerchantNumberOfSubSellers?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The city of the
   * sub-merchant's address.
   * * Format: Alphanumeric
   * * Maximum length: 13 characters
   */
  subMerchantSubSellerSubSellerNrCity?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The three-letter
   * country code of the sub-merchant's address. For example, **BRA** for Brazil.
   * * Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   * * Fixed length: 3 characters
   */
  subMerchantSubSellerSubSellerNrCountry?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The email address of
   * the sub-merchant.
   * * Format: Alphanumeric
   * * Maximum length: 40 characters
   */
  subMerchantSubSellerSubSellerNrEmail?: string;
  /**
   * Required for transactions performed by registered payment facilitators. A unique identifier
   * that you create for the sub-merchant, used by schemes to identify the sub-merchant.
   * * Format: Alphanumeric
   * * Maximum length: 15 characters
   */
  subMerchantSubSellerSubSellerNrId?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The sub-merchant's
   * 4-digit Merchant Category Code (MCC).
   * * Format: Numeric
   * * Fixed length: 4 digits
   */
  subMerchantSubSellerSubSellerNrMcc?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The name of the
   * sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement
   * that will appear in the card statement. Exception: for acquirers in Brazil, this value does not
   * overwrite the shopper statement.
   * * Format: Alphanumeric
   * * Maximum length: 22 characters
   */
  subMerchantSubSellerSubSellerNrName?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The phone number of the
   * sub-merchant.
   * * Format: Alphanumeric and special characters
   * * Maximum length: 20 characters
   */
  subMerchantSubSellerSubSellerNrPhoneNumber?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The postal code of the
   * sub-merchant's address, without dashes.
   * * Format: Numeric
   * * Fixed length: 8 digits
   */
  subMerchantSubSellerSubSellerNrPostalCode?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The state code of the
   * sub-merchant's address, if applicable to the country.
   * * Format: Alphanumeric
   * * Maximum length: 2 characters
   */
  subMerchantSubSellerSubSellerNrState?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The street name and
   * house number of the sub-merchant's address.
   * * Format: Alphanumeric
   * * Maximum length: 60 characters
   */
  subMerchantSubSellerSubSellerNrStreet?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The tax ID of the
   * sub-merchant.
   * * Format: Numeric
   * * Fixed length: 11 digits for the CPF or 14 digits for the CNPJ
   */
  subMerchantSubSellerSubSellerNrTaxId?: string;
};

export const additionalDataSubMerchantSchema: Schema<AdditionalDataSubMerchant> =
  s.object<AdditionalDataSubMerchant>({
    subMerchantNumberOfSubSellers: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrCity: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrCountry: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrEmail: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrId: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrMcc: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrName: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrPhoneNumber: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrPostalCode: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrState: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrStreet: s.optional(s.string()),
    subMerchantSubSellerSubSellerNrTaxId: s.optional(s.string()),
    _keysMap: {
      subMerchantNumberOfSubSellers: "subMerchant.numberOfSubSellers",
      subMerchantSubSellerSubSellerNrCity: "subMerchant.subSeller[subSellerNr].city",
      subMerchantSubSellerSubSellerNrCountry: "subMerchant.subSeller[subSellerNr].country",
      subMerchantSubSellerSubSellerNrEmail: "subMerchant.subSeller[subSellerNr].email",
      subMerchantSubSellerSubSellerNrId: "subMerchant.subSeller[subSellerNr].id",
      subMerchantSubSellerSubSellerNrMcc: "subMerchant.subSeller[subSellerNr].mcc",
      subMerchantSubSellerSubSellerNrName: "subMerchant.subSeller[subSellerNr].name",
      subMerchantSubSellerSubSellerNrPhoneNumber: "subMerchant.subSeller[subSellerNr].phoneNumber",
      subMerchantSubSellerSubSellerNrPostalCode: "subMerchant.subSeller[subSellerNr].postalCode",
      subMerchantSubSellerSubSellerNrState: "subMerchant.subSeller[subSellerNr].state",
      subMerchantSubSellerSubSellerNrStreet: "subMerchant.subSeller[subSellerNr].street",
      subMerchantSubSellerSubSellerNrTaxId: "subMerchant.subSeller[subSellerNr].taxId",
    },
  });
