import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount12Schema, type Amount12 } from "./amount12.js";
import { amount23Schema, type Amount23 } from "./amount23.js";
import { fraudResult1Schema, type FraudResult1 } from "./fraud-result1.js";

export type CreateOrderResponse = {
  /**
   * Contains additional information about the payment. Some data fields are included only if you
   * select them first: Go to **Customer Area** > **Developers** > **Additional data**.
   */
  additionalData?: Record<string, string>;
  /** The initial amount of the order. */
  amount: Amount12;
  /** The date that the order will expire. */
  expiresAt: string;
  /** The fraud result properties of the payment. */
  fraudResult?: FraudResult1;
  /** The encrypted data that will be used by merchant for adding payments to the order. */
  orderData: string;
  /**
   * Adyen's 16-character reference associated with the transaction/request. This value is globally
   * unique; quote it when communicating with us about this request.
   */
  pspReference?: string;
  /** The reference provided by merchant for creating the order. */
  reference?: string;
  /**
   * If the payment's authorisation is refused or an error occurs during authorisation, this field
   * holds Adyen's mapped reason for the refusal or a description of the error. When a transaction
   * fails, the authorisation response includes `resultCode` and `refusalReason` values.
   *
   * For more information, see [Refusal
   * reasons](https://docs.adyen.com/development-resources/refusal-reasons).
   */
  refusalReason?: string;
  /** The remaining amount in the order. */
  remainingAmount: Amount23;
  /**
   * The result of the order creation request. The value is always **Success**.
   *
   * @default "Success"
   */
  resultCode?: "Success";
};

export const createOrderResponseSchema: Schema<CreateOrderResponse> = s.object<CreateOrderResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amount12Schema,
  expiresAt: s.string(),
  fraudResult: s.optional(s.lazy(() => fraudResult1Schema)),
  orderData: s.string(),
  pspReference: s.optional(s.string()),
  reference: s.optional(s.string()),
  refusalReason: s.optional(s.string()),
  remainingAmount: amount23Schema,
  resultCode: s.defaulted(s.literal("Success"), "Success"),
});
