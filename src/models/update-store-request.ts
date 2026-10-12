import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status41Schema, type Status41 } from "./status41.js";
import {
  storeSplitConfiguration1Schema,
  type StoreSplitConfiguration1,
} from "./store-split-configuration1.js";
import { subMerchantData1Schema, type SubMerchantData1 } from "./sub-merchant-data1.js";
import { updatableAddress1Schema, type UpdatableAddress1 } from "./updatable-address1.js";

export type UpdateStoreRequest = {
  /** The address of the store. It is not possible to update the country of the store. */
  address?: UpdatableAddress1;
  /**
   * The unique identifiers of the [business
   * lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__resParam_id)
   * that the store is associated with.
   */
  businessLineIds?: string[];
  /** The description of the store. */
  description?: string;
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
  /**
   * The phone number of the store, including '+' and country code in the
   * [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we
   * convert and validate the phone number against E.164.
   */
  phoneNumber?: string;
  /** Rules for Adyen for Platforms merchants to split the transaction amount and fees. */
  splitConfiguration?: StoreSplitConfiguration1;
  /**
   * The status of the store. Possible values are:
   *
   * - **active**: This value is assigned automatically when a store is created.
   * - **inactive**: The maximum [transaction limits and number of Store-and-Forward
   *   transactions](https://docs.adyen.com/point-of-sale/determine-account-structure/configure-features#payment-features)
   *   for the store are set to 0. This blocks new transactions, but captures are still possible.
   * - **closed**: The terminals of the store are reassigned to the merchant inventory, so they
   *   can't process payments.
   *
   * You can change the status from **active** to **inactive**, and from **inactive** to **active**
   * or **closed**. Once **closed**, a store can't be reopened.
   */
  status?: Status41;
  /**
   * The sub-merchant data relevant for registered payment facilitators transacting on standalone
   * terminals.
   */
  subMerchantData?: SubMerchantData1;
};

export const updateStoreRequestSchema: Schema<UpdateStoreRequest> = s.object<UpdateStoreRequest>({
  address: s.optional(s.lazy(() => updatableAddress1Schema)),
  businessLineIds: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  externalReferenceId: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  splitConfiguration: s.optional(s.lazy(() => storeSplitConfiguration1Schema)),
  status: s.optional(s.lazy(() => status41Schema)),
  subMerchantData: s.optional(s.lazy(() => subMerchantData1Schema)),
});
