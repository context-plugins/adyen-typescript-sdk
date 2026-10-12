import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicator for the length of time since this payment method was added to this shopper's account.
 * Allowed values:
 * * notApplicable
 * * thisTransaction
 * * lessThan30Days
 * * from30To60Days
 * * moreThan60Days
 */
export const PaymentAccountIndicator = {
  NotApplicable: "notApplicable",
  ThisTransaction: "thisTransaction",
  LessThan30Days: "lessThan30Days",
  From30To60Days: "from30To60Days",
  MoreThan60Days: "moreThan60Days",
} as const;
export type PaymentAccountIndicator =
  | (typeof PaymentAccountIndicator)[keyof typeof PaymentAccountIndicator]
  | (string & {});

export const paymentAccountIndicatorSchema: EnumSchema<PaymentAccountIndicator> =
  s.enumOf<PaymentAccountIndicator>(PaymentAccountIndicator);
