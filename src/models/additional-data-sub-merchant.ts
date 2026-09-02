import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataSubMerchant = {
  subMerchantNumberOfSubSellers?: string;
  subMerchantSubSellerSubSellerNrCity?: string;
  subMerchantSubSellerSubSellerNrCountry?: string;
  subMerchantSubSellerSubSellerNrEmail?: string;
  subMerchantSubSellerSubSellerNrId?: string;
  subMerchantSubSellerSubSellerNrMcc?: string;
  subMerchantSubSellerSubSellerNrName?: string;
  subMerchantSubSellerSubSellerNrPhoneNumber?: string;
  subMerchantSubSellerSubSellerNrPostalCode?: string;
  subMerchantSubSellerSubSellerNrState?: string;
  subMerchantSubSellerSubSellerNrStreet?: string;
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
