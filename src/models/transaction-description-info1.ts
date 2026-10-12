import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type8, type8Schema } from "./type8.js";

/**
 * Information regarding the transaction description. > You cannot configure the transaction
 * description in the test environment.
 */
export type TransactionDescriptionInfo1 = {
  /**
   * The text to be shown on the shopper's bank statement. We recommend sending a maximum of 22
   * characters, otherwise banks might truncate the string. Allowed characters: **a-z**, **A-Z**,
   * **0-9**, spaces, and special characters **. , ' _ - ? + * /**.
   */
  doingBusinessAsName?: string;
  /**
   * The type of transaction description you want to use:
   * - **fixed**: The transaction description set in this request is used for all payments with this
   *   payment method.
   * - **append**: The transaction description set in this request is used as a base for all
   *   payments with this payment method. The [transaction description set in the request to process
   *   the
   *   payment](https://docs.adyen.com/api-explorer/Checkout/70/post/sessions#request-shopperStatement)
   *   is appended to this base description. Note that if the combined length exceeds 22 characters,
   *   banks may truncate the string.
   * - **dynamic**: Only the [transaction description set in the request to process the
   *   payment](https://docs.adyen.com/api-explorer/Checkout/70/post/sessions#request-shopperStatement)
   *   is used for payments with this payment method.
   *
   * @default Type8.Dynamic
   */
  type?: Type8;
};

export const transactionDescriptionInfo1Schema: Schema<TransactionDescriptionInfo1> =
  s.object<TransactionDescriptionInfo1>({
    doingBusinessAsName: s.optional(s.string()),
    type: s.defaulted(type8Schema, Type8.Dynamic),
  });
