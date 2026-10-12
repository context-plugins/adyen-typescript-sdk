import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

/** **diners** details */
export type DinersResponseInfo1 = {
  /** MID (Merchant ID) number. */
  midNumber?: string;
  /**
   * Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment
   * method.
   */
  reuseMidNumber?: boolean;
  /**
   * The service level (settlement type) of this payment method. Possible values:
   *  * **noContract**: Adyen holds the contract with JCB.
   *  * **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you
   *    or your sub-merchant directly.
   */
  serviceLevel?: string;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const dinersResponseInfo1Schema: Schema<DinersResponseInfo1> = s.object<DinersResponseInfo1>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
