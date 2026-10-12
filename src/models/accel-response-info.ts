import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processingTypeSchema, type ProcessingType } from "./processing-type.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type AccelResponseInfo = {
  /**
   * The type of transactions processed over this payment method. Allowed values:
   * - **pos** for in-person payments.
   * - **billpay** for subscription payments, both the initial payment and the later recurring
   *   payments. These transactions have `recurringProcessingModel` **Subscription**.
   * - **ecom** for all other card not present transactions. This includes non-recurring
   *   transactions and transactions with `recurringProcessingModel` **CardOnFile** or
   *   **UnscheduledCardOnFile**.
   */
  processingType?: ProcessingType;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const accelResponseInfoSchema: Schema<AccelResponseInfo> = s.object<AccelResponseInfo>({
  processingType: s.optional(s.lazy(() => processingTypeSchema)),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
