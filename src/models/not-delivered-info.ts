import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancellingEntity1Schema, type CancellingEntity1 } from "./cancelling-entity1.js";
import { productType21Schema, type ProductType21 } from "./product-type21.js";

export type NotDeliveredInfo = {
  /**
   * The delivery location specified by the cardholder. Required if **deliveredToWrongLocation** is
   * **true**.
   */
  agreedDeliveryLocation?: string;
  /** The date the undelivered goods or services were cancelled in YYYY-MM-DD format. */
  dateOfCancellation?: string;
  /**
   * Indicates goods were delivered to the wrong location.
   *
   * Possible values: **true**, **false**.
   */
  deliveredToWrongLocation?: boolean;
  /** Your description of the issue for raising a dispute of `type` **notDelivered**. */
  descriptionOfIssue: string;
  /**
   * Indicates if the cardholder returned the goods to the merchant. Required if **isDeliveryLate**
   * is **true**.
   *
   * Possible values: **true**, **false**.
   */
  didCardholderReturn?: boolean;
  /**
   * Indicates if the goods or services were delivered late. Required if **whatWasNotDelivered** is
   * **goods**.
   *
   * Possible values: **true**, **false**.
   */
  isDeliveryLate?: boolean;
  /**
   * Indicates if the transaction was processed by a bankrupt merchant.
   *
   * Possible values: **true**, **false**.
   */
  isMerchantBankrupt?: boolean;
  /**
   * Indicates if the transaction is non-fiat or non-fungible token (NFT) related.
   *
   * Possible values: **true**, **false**.
   */
  isNonFiatOrNft?: boolean;
  /**
   * The date the undelivered goods or services were expected to be delivered in YYYY-MM-DD format.
   */
  lastExpectedDate: string;
  /**
   * The type of product that you expected to receive.
   *
   * Possible values: **goods**, **services**.
   */
  whatWasNotDelivered: ProductType21;
  /**
   * The party that initiated the cancellation of the transaction.
   *
   * Possible values: **merchant**, **cardholder**.
   */
  whoCancelled?: CancellingEntity1;
};

export const notDeliveredInfoSchema: Schema<NotDeliveredInfo> = s.object<NotDeliveredInfo>({
  agreedDeliveryLocation: s.optional(s.string()),
  dateOfCancellation: s.optional(s.dateOnly()),
  deliveredToWrongLocation: s.optional(s.boolean()),
  descriptionOfIssue: s.string(),
  didCardholderReturn: s.optional(s.boolean()),
  isDeliveryLate: s.optional(s.boolean()),
  isMerchantBankrupt: s.optional(s.boolean()),
  isNonFiatOrNft: s.optional(s.boolean()),
  lastExpectedDate: s.dateOnly(),
  whatWasNotDelivered: productType21Schema,
  whoCancelled: s.optional(s.lazy(() => cancellingEntity1Schema)),
});
