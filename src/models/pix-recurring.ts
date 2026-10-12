import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount42Schema, type Amount42 } from "./amount42.js";
import { amount43Schema, type Amount43 } from "./amount43.js";
import { frequency2Schema, type Frequency2 } from "./frequency2.js";

export type PixRecurring = {
  /** The date on which the shopper's payment method will be charged, in YYYY-MM-DD format. */
  billingDate?: string;
  /** Flag used to define whether liquidation can happen only on business days */
  businessDayOnly?: boolean;
  /**
   * End date of the billing plan, in YYYY-MM-DD format. The end date must align with the frequency
   * and the start date of the billing plan. If left blank, the subscription will continue
   * indefinitely unless it is cancelled by the shopper.
   */
  endsAt?: string;
  /** The frequency at which the shopper will be charged. */
  frequency?: Frequency2;
  /**
   * For a billing plan where the payment amounts are variable, the minimum amount to charge the
   * shopper for each recurring payment. When a shopper approves the billing plan, they can also
   * specify a maximum amount in their banking app.
   */
  minAmount?: Amount42;
  /**
   * The pspReference for the failed recurring payment. Find this in AUTHORISATION webhook you
   * received after the billing date.
   */
  originalPspReference?: string;
  /**
   * For a billing plan where the payment amount is fixed, the amount the shopper will be charged
   * for each recurring payment.
   */
  recurringAmount?: Amount43;
  /**
   * The text that that will be shown on the shopper's bank statement for the recurring payments. We
   * recommend to add a descriptive text about the subscription to let your shoppers recognize your
   * recurring payments. Maximum length: 35 characters.
   */
  recurringStatement?: string;
  /** When set to true, you can retry for failed recurring payments. The default value is true. */
  retryPolicy?: boolean;
  /**
   * Start date of the billing plan, in YYYY-MM-DD format. The default value is the transaction
   * date.
   */
  startsAt?: string;
};

export const pixRecurringSchema: Schema<PixRecurring> = s.object<PixRecurring>({
  billingDate: s.optional(s.string()),
  businessDayOnly: s.optional(s.boolean()),
  endsAt: s.optional(s.string()),
  frequency: s.optional(s.lazy(() => frequency2Schema)),
  minAmount: s.optional(s.lazy(() => amount42Schema)),
  originalPspReference: s.optional(s.string()),
  recurringAmount: s.optional(s.lazy(() => amount43Schema)),
  recurringStatement: s.optional(s.string()),
  retryPolicy: s.optional(s.boolean()),
  startsAt: s.optional(s.string()),
});
