import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transaction description you want to use:
 * - **fixed**: The transaction description set in this request is used for all payments with this
 *   payment method.
 * - **append**: The transaction description set in this request is used as a base for all payments
 *   with this payment method. The [transaction description set in the request to process the
 *   payment](https://docs.adyen.com/api-explorer/Checkout/70/post/sessions#request-shopperStatement)
 *   is appended to this base description. Note that if the combined length exceeds 22 characters,
 *   banks may truncate the string.
 * - **dynamic**: Only the [transaction description set in the request to process the
 *   payment](https://docs.adyen.com/api-explorer/Checkout/70/post/sessions#request-shopperStatement)
 *   is used for payments with this payment method.
 */
export const Type8 = {
  Append: "append",
  Dynamic: "dynamic",
  Fixed: "fixed",
} as const;
export type Type8 = (typeof Type8)[keyof typeof Type8] | (string & {});

export const type8Schema: EnumSchema<Type8> = s.enumOf<Type8>(Type8);
