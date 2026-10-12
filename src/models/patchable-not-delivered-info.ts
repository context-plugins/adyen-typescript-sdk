import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancellingEntitySchema, type CancellingEntity } from "./cancelling-entity.js";
import { productType21Schema, type ProductType21 } from "./product-type21.js";

export type PatchableNotDeliveredInfo = {
  /**
   * The delivery location specified by the cardholder. Required if **deliveredToWrongLocation** is
   * **true**.
   */
  agreedDeliveryLocation?: string | null;
  /** The date the undelivered goods or services were cancelled in YYYY-MM-DD format. */
  dateOfCancellation?: string | null;
  /**
   * Indicates goods were delivered to the wrong location.
   *
   * Possible values: **true**, **false**.
   */
  deliveredToWrongLocation?: boolean | null;
  /** Your description of the issue for raising a dispute of `type` **notDelivered**. */
  descriptionOfIssue?: string;
  /**
   * Indicates if the cardholder returned the goods to the merchant. Required if **isDeliveryLate**
   * is **true**.
   *
   * Possible values: **true**, **false**.
   */
  didCardholderReturn?: boolean | null;
  /**
   * Indicates if the goods or services were delivered late. Required if **whatWasNotDelivered** is
   * **goods**.
   *
   * Possible values: **true**, **false**.
   */
  isDeliveryLate?: boolean | null;
  /**
   * Indicates if the transaction was processed by a bankrupt merchant.
   *
   * Possible values: **true**, **false**.
   */
  isMerchantBankrupt?: boolean | null;
  /**
   * Indicates if the transaction is non-fiat or non-fungible token (NFT) related.
   *
   * Possible values: **true**, **false**.
   */
  isNonFiatOrNft?: boolean | null;
  /**
   * The date the undelivered goods or services were expected to be delivered in YYYY-MM-DD format.
   */
  lastExpectedDate?: string;
  /**
   * The type of product that you expected to receive.
   *
   * Possible values: **goods**, **services**.
   */
  whatWasNotDelivered?: ProductType21;
  /**
   * The party that initiated the cancellation of the transaction.
   *
   * Possible values: **merchant**, **cardholder**.
   */
  whoCancelled?: CancellingEntity | null;
};

export const patchableNotDeliveredInfoSchema: Schema<PatchableNotDeliveredInfo> =
  s.object<PatchableNotDeliveredInfo>({
    agreedDeliveryLocation: s.optionalNullable(s.string()),
    dateOfCancellation: s.optionalNullable(s.dateOnly()),
    deliveredToWrongLocation: s.optionalNullable(s.boolean()),
    descriptionOfIssue: s.optional(s.string()),
    didCardholderReturn: s.optionalNullable(s.boolean()),
    isDeliveryLate: s.optionalNullable(s.boolean()),
    isMerchantBankrupt: s.optionalNullable(s.boolean()),
    isNonFiatOrNft: s.optionalNullable(s.boolean()),
    lastExpectedDate: s.optional(s.dateOnly()),
    whatWasNotDelivered: s.optional(s.lazy(() => productType21Schema)),
    whoCancelled: s.optionalNullable(s.lazy(() => cancellingEntitySchema)),
  });
