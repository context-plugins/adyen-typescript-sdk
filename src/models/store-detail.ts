import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentFlowSchema, type PaymentFlow } from "./payment-flow.js";
import { status8Schema, type Status8 } from "./status8.js";
import { viasAddress7Schema, type ViasAddress7 } from "./vias-address7.js";
import { viasPhoneNumber4Schema, type ViasPhoneNumber4 } from "./vias-phone-number4.js";

export type StoreDetail = {
  /** The address of the physical store where the account holder will process payments from. */
  address: ViasAddress7;
  /**
   * The phone number of the store provided as a single string. It will be handled as a landline
   * phone.
   *
   * Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
   */
  fullPhoneNumber?: string;
  /** Store logo for payment method setup. */
  logo?: string;
  /** The merchant account to which the store belongs. */
  merchantAccount: string;
  /** The merchant category code (MCC) that classifies the business of the account holder. */
  merchantCategoryCode: string;
  /** Merchant house number for payment method setup. */
  merchantHouseNumber?: string;
  /** The phone number of the store. */
  phoneNumber?: ViasPhoneNumber4;
  /** The sales channel. Possible values: **Ecommerce**, **POS**. */
  shopperInteraction?: PaymentFlow;
  /**
   * The unique reference for the split configuration, returned when you configure splits in your
   * Customer Area. When this is provided, the `virtualAccount` is also required. Adyen uses the
   * configuration and the `virtualAccount` to split funds between accounts in your platform.
   */
  splitConfigurationUuid?: string;
  /**
   * The status of the store. Possible values: **Pending**, **Active**, **Inactive**,
   * **InactiveWithModifications**, **Closed**.
   */
  status?: Status8;
  /**
   * Adyen-generated unique alphanumeric identifier (UUID) for the store, returned in the response
   * when you create a store. Required when updating an existing store in an `/updateAccountHolder`
   * request.
   */
  store?: string;
  /**
   * The name of the account holder's store. This value is shown in shopper statements.
   *
   *  * Length: Between 3 to 22 characters
   *
   *  * The following characters are *not* supported: **:;}{$#@!|<>%^*+=\\**
   *
   * **Note:** storeName does not appear in American Express shopper statements by default. Contact
   * Adyen Support to enable this for American Express.
   */
  storeName?: string;
  /**
   * Your unique identifier for the store. The Customer Area also uses this value for the store
   * description.
   *
   *  * Length: Between 3 to 128 characters
   *
   * * The following characters are *not* supported: **:;}{$#@!|<>%^*+=\\**
   */
  storeReference?: string;
  /**
   * The account holder's `accountCode` where the split amount will be sent. Required when you
   * provide the `splitConfigurationUUID`.
   */
  virtualAccount?: string;
  /** URL of the ecommerce store. */
  webAddress?: string;
};

export const storeDetailSchema: Schema<StoreDetail> = s.object<StoreDetail>({
  address: viasAddress7Schema,
  fullPhoneNumber: s.optional(s.string()),
  logo: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantCategoryCode: s.string(),
  merchantHouseNumber: s.optional(s.string()),
  phoneNumber: s.optional(s.lazy(() => viasPhoneNumber4Schema)),
  shopperInteraction: s.optional(s.lazy(() => paymentFlowSchema)),
  splitConfigurationUuid: s.optional(s.string()),
  status: s.optional(s.lazy(() => status8Schema)),
  store: s.optional(s.string()),
  storeName: s.optional(s.string()),
  storeReference: s.optional(s.string()),
  virtualAccount: s.optional(s.string()),
  webAddress: s.optional(s.string()),
  _keysMap: {
    splitConfigurationUuid: "splitConfigurationUUID",
  },
});
