import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

/** **bcmc** (Bancontact) details */
export type BcmcResponseInfo1 = {
  /**
   * Indicates if [Bancontact
   * mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled.
   */
  enableBcmcMobile?: boolean;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const bcmcResponseInfo1Schema: Schema<BcmcResponseInfo1> = s.object<BcmcResponseInfo1>({
  enableBcmcMobile: s.optional(s.boolean()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
