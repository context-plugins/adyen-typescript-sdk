import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformPaymentConfiguration1Schema,
  type PlatformPaymentConfiguration1,
} from "./platform-payment-configuration1.js";
import { status23Schema, type Status23 } from "./status23.js";

export type BalanceAccountBase = {
  /**
   * The unique identifier of the [account
   * holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id)
   * associated with the balance account.
   */
  accountHolderId: string;
  /**
   * The default three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. This
   * is the currency displayed on the Balance Account overview page in your Customer Area. The
   * default value is **EUR**. > After a balance account is created, you cannot change its default
   * currency.
   */
  defaultCurrencyCode?: string;
  /**
   * A human-readable description of the balance account, maximum 300 characters. You can use this
   * parameter to distinguish between multiple balance accounts under an account holder.
   */
  description?: string;
  /** The unique identifier of the balance account. */
  id: string;
  /**
   * A set of key and value pairs for general use. The keys do not have specific names and may be
   * used for storing miscellaneous data as desired. > Note that during an update of metadata, the
   * omission of existing key-value pairs will result in the deletion of those key-value pairs.
   */
  metadata?: Record<string, string>;
  /**
   * The unique identifier of the account of the migrated account holder in the classic integration.
   */
  migratedAccountCode?: string;
  /**
   * Contains key-value pairs to configure the sales day closing time and settlement delay for a
   * balance account.
   */
  platformPaymentConfiguration?: PlatformPaymentConfiguration1;
  /** Your reference for the balance account, maximum 150 characters. */
  reference?: string;
  /** The status of the balance account, set to **active** by default. */
  status?: Status23;
  /**
   * The time zone of the balance account. For example, **Europe/Amsterdam**. Defaults to the time
   * zone of the account holder if no time zone is set. For possible values, see the [list of time
   * zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  timeZone?: string;
};

export const balanceAccountBaseSchema: Schema<BalanceAccountBase> = s.object<BalanceAccountBase>({
  accountHolderId: s.string(),
  defaultCurrencyCode: s.optional(s.string()),
  description: s.optional(s.string()),
  id: s.string(),
  metadata: s.optional(s.record(s.string(), s.string())),
  migratedAccountCode: s.optional(s.string()),
  platformPaymentConfiguration: s.optional(s.lazy(() => platformPaymentConfiguration1Schema)),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status23Schema)),
  timeZone: s.optional(s.string()),
});
