import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type AccountPayoutState = {
  /**
   * Indicates whether payouts are allowed. This field is the overarching payout status, and is the
   * aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is
   * false, no payouts will be permitted for any of the account holder's accounts. If this field is
   * true, payouts will be permitted for any of the account holder's accounts.
   */
  allowPayout?: boolean;
  /**
   * The reason why payouts (to all of the account holder's accounts) have been disabled (by the
   * platform). If the `disabled` field is true, this field can be used to explain why.
   */
  disableReason?: string;
  /**
   * Indicates whether payouts have been disabled (by the platform) for all of the account holder's
   * accounts. A platform may enable and disable this field at their discretion. If this field is
   * true, `allowPayout` will be false and no payouts will be permitted for any of the account
   * holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending
   * on other factors.
   */
  disabled?: boolean;
  /**
   * The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen).
   * If payouts have been disabled by Adyen, this field will explain why. If this field is blank,
   * payouts have not been disabled by Adyen.
   */
  notAllowedReason?: string;
  /**
   * The maximum amount that payouts are limited to. Only applies if payouts are allowed but
   * limited.
   */
  payoutLimit?: Amount;
  /** The payout tier that the account holder occupies. */
  tierNumber?: number;
};

export const accountPayoutStateSchema: Schema<AccountPayoutState> = s.object<AccountPayoutState>({
  allowPayout: s.optional(s.boolean()),
  disableReason: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  notAllowedReason: s.optional(s.string()),
  payoutLimit: s.optional(s.lazy(() => amountSchema)),
  tierNumber: s.optional(s.int()),
});
