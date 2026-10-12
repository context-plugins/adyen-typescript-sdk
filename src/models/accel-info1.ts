import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processingTypeSchema, type ProcessingType } from "./processing-type.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/** Details to provide if `type` is **accel**. */
export type AccelInfo1 = {
  /**
   * The type of transactions processed over this payment method. Allowed values:
   * - **pos** for in-person payments.
   * - **billpay** for subscription payments, both the initial payment and the later recurring
   *   payments. These transactions have `recurringProcessingModel` **Subscription**.
   * - **ecom** for all other card not present transactions. This includes non-recurring
   *   transactions and transactions with `recurringProcessingModel` **CardOnFile** or
   *   **UnscheduledCardOnFile**.
   */
  processingType: ProcessingType;
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const accelInfo1Schema: Schema<AccelInfo1> = s.object<AccelInfo1>({
  processingType: processingTypeSchema,
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
