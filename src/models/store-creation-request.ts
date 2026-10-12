import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localizedInformation2Schema, type LocalizedInformation2 } from "./localized-information2.js";
import { storeLocation1Schema, type StoreLocation1 } from "./store-location1.js";
import {
  storeSplitConfiguration1Schema,
  type StoreSplitConfiguration1,
} from "./store-split-configuration1.js";
import { subMerchantData1Schema, type SubMerchantData1 } from "./sub-merchant-data1.js";

export type StoreCreationRequest = {
  /** The address of the store. */
  address: StoreLocation1;
  /**
   * The unique identifiers of the [business
   * lines](https://docs.adyen.com/api-explorer/legalentity/latest/post/businessLines#responses-200-id)
   * that the store is associated with. If not specified, the business line of the merchant account
   * is used. Required when there are multiple business lines under the merchant account.
   */
  businessLineIds?: string[];
  /** Your description of the store. */
  description: string;
  /**
   * The unique identifier of the store, used by certain payment methods and tax authorities.
   *
   * Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes,
   * hyphens, or without separators.
   *
   * Optional for SIRET in France, up to 14 digits.
   *
   * Optional for Zip in Australia, up to 50 digits.
   */
  externalReferenceId?: string;
  /** Localized information about the store. */
  localizedInformation?: LocalizedInformation2;
  /**
   * The phone number of the store, including '+' and country code in the
   * [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we
   * convert and validate the phone number against E.164.
   */
  phoneNumber: string;
  /**
   * Your reference to recognize the store by. Also known as the store code. Allowed characters:
   * lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and
   * underscore (_).
   *
   * If you do not provide a reference in your POST request, it is populated with the
   * Adyen-generated
   * [id](https://docs.adyen.com/api-explorer/Management/latest/post/stores#responses-200-id).
   */
  reference?: string;
  /**
   * The store name to be shown on the shopper's bank or credit card statement and on the shopper
   * receipt. Maximum length: 22 characters; can't be all numbers.
   */
  shopperStatement: string;
  /** Rules for Adyen for Platforms merchants to split the transaction amount and fees. */
  splitConfiguration?: StoreSplitConfiguration1;
  /**
   * The sub-merchant data relevant for registered payment facilitators transacting on standalone
   * terminals.
   */
  subMerchantData?: SubMerchantData1;
};

export const storeCreationRequestSchema: Schema<StoreCreationRequest> = s.object<StoreCreationRequest>({
  address: storeLocation1Schema,
  businessLineIds: s.optional(s.array(s.string())),
  description: s.string(),
  externalReferenceId: s.optional(s.string()),
  localizedInformation: s.optional(s.lazy(() => localizedInformation2Schema)),
  phoneNumber: s.string(),
  reference: s.optional(s.string()),
  shopperStatement: s.string(),
  splitConfiguration: s.optional(s.lazy(() => storeSplitConfiguration1Schema)),
  subMerchantData: s.optional(s.lazy(() => subMerchantData1Schema)),
});
