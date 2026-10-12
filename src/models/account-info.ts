import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountAgeIndicatorSchema, type AccountAgeIndicator } from "./account-age-indicator.js";
import { accountChangeIndicatorSchema, type AccountChangeIndicator } from "./account-change-indicator.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  deliveryAddressUsageIndicatorSchema,
  type DeliveryAddressUsageIndicator,
} from "./delivery-address-usage-indicator.js";
import { passwordChangeIndicatorSchema, type PasswordChangeIndicator } from "./password-change-indicator.js";
import { paymentAccountIndicatorSchema, type PaymentAccountIndicator } from "./payment-account-indicator.js";

/**
 * Shopper account information for 3D Secure 2. > For 3D Secure 2 transactions, we recommend that
 * you include this object to increase the chances of achieving a frictionless flow.
 */
export type AccountInfo = {
  /**
   * Indicator for the length of time since this shopper account was created in the merchant's
   * environment. Allowed values:
   * * notApplicable
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  accountAgeIndicator?: AccountAgeIndicator;
  /** Date when the shopper's account was last changed. */
  accountChangeDate?: Date;
  /**
   * Indicator for the length of time since the shopper's account was last updated. Allowed values:
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  accountChangeIndicator?: AccountChangeIndicator;
  /** Date when the shopper's account was created. */
  accountCreationDate?: Date;
  /**
   * Indicates the type of account. For example, for a multi-account card product. Allowed values:
   * * notApplicable
   * * credit
   * * debit
   */
  accountType?: AccountType;
  /** Number of attempts the shopper tried to add a card to their account in the last day. */
  addCardAttemptsDay?: number;
  /** Date the selected delivery address was first used. */
  deliveryAddressUsageDate?: Date;
  /**
   * Indicator for the length of time since this delivery address was first used. Allowed values:
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  deliveryAddressUsageIndicator?: DeliveryAddressUsageIndicator;
  /**
   * Shopper's home phone number (including the country code).
   *
   * @deprecated
   */
  homePhone?: string;
  /**
   * Shopper's mobile phone number (including the country code).
   *
   * @deprecated
   */
  mobilePhone?: string;
  /** Date when the shopper last changed their password. */
  passwordChangeDate?: Date;
  /**
   * Indicator when the shopper has changed their password. Allowed values:
   * * notApplicable
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  passwordChangeIndicator?: PasswordChangeIndicator;
  /**
   * Number of all transactions (successful and abandoned) from this shopper in the past 24 hours.
   */
  pastTransactionsDay?: number;
  /** Number of all transactions (successful and abandoned) from this shopper in the past year. */
  pastTransactionsYear?: number;
  /** Date this payment method was added to the shopper's account. */
  paymentAccountAge?: Date;
  /**
   * Indicator for the length of time since this payment method was added to this shopper's account.
   * Allowed values:
   * * notApplicable
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  paymentAccountIndicator?: PaymentAccountIndicator;
  /** Number of successful purchases in the last six months. */
  purchasesLast6Months?: number;
  /** Whether suspicious activity was recorded on this account. */
  suspiciousActivity?: boolean;
  /**
   * Shopper's work phone number (including the country code).
   *
   * @deprecated
   */
  workPhone?: string;
};

export const accountInfoSchema: Schema<AccountInfo> = s.object<AccountInfo>({
  accountAgeIndicator: s.optional(s.lazy(() => accountAgeIndicatorSchema)),
  accountChangeDate: s.optional(s.dateTime()),
  accountChangeIndicator: s.optional(s.lazy(() => accountChangeIndicatorSchema)),
  accountCreationDate: s.optional(s.dateTime()),
  accountType: s.optional(s.lazy(() => accountTypeSchema)),
  addCardAttemptsDay: s.optional(s.int()),
  deliveryAddressUsageDate: s.optional(s.dateTime()),
  deliveryAddressUsageIndicator: s.optional(s.lazy(() => deliveryAddressUsageIndicatorSchema)),
  homePhone: s.optional(s.string()),
  mobilePhone: s.optional(s.string()),
  passwordChangeDate: s.optional(s.dateTime()),
  passwordChangeIndicator: s.optional(s.lazy(() => passwordChangeIndicatorSchema)),
  pastTransactionsDay: s.optional(s.int()),
  pastTransactionsYear: s.optional(s.int()),
  paymentAccountAge: s.optional(s.dateTime()),
  paymentAccountIndicator: s.optional(s.lazy(() => paymentAccountIndicatorSchema)),
  purchasesLast6Months: s.optional(s.int()),
  suspiciousActivity: s.optional(s.boolean()),
  workPhone: s.optional(s.string()),
});
