import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicator for the length of time since this shopper account was created in the merchant's
 * environment. Allowed values:
 * * notApplicable
 * * thisTransaction
 * * lessThan30Days
 * * from30To60Days
 * * moreThan60Days, Indicator when the shopper has changed their password. Allowed values:
 * * notApplicable
 * * thisTransaction
 * * lessThan30Days
 * * from30To60Days
 * * moreThan60Days, Indicator for the length of time since this payment method was added to this
 *   shopper's account. Allowed values:
 * * notApplicable
 * * thisTransaction
 * * lessThan30Days
 * * from30To60Days
 * * moreThan60Days
 */
export const AccountAgeIndicator = {
  NotApplicable: "notApplicable",
  ThisTransaction: "thisTransaction",
  LessThan30Days: "lessThan30Days",
  From30To60Days: "from30To60Days",
  MoreThan60Days: "moreThan60Days",
} as const;
export type AccountAgeIndicator =
  | (typeof AccountAgeIndicator)[keyof typeof AccountAgeIndicator]
  | (string & {});

export const accountAgeIndicatorSchema: EnumSchema<AccountAgeIndicator> =
  s.enumOf<AccountAgeIndicator>(AccountAgeIndicator);
