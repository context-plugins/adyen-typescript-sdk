import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformPaymentConfiguration1Schema,
  type PlatformPaymentConfiguration1,
} from "./platform-payment-configuration1.js";
import { status43Schema, type Status43 } from "./status43.js";

export type BalanceAccountUpdateRequest = {
  /**
   * The unique identifier of the [account
   * holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id)
   * associated with the balance account.
   */
  accountHolderId?: string;
  /**
   * A human-readable description of the balance account. You can use this parameter to distinguish
   * between multiple balance accounts under an account holder.
   */
  description?: string;
  /**
   * A set of key and value pairs for general use. The keys do not have specific names and may be
   * used for storing miscellaneous data as desired. > Note that during an update of metadata, the
   * omission of existing key-value pairs will result in the deletion of those key-value pairs.
   */
  metadata?: Record<string, string>;
  /**
   * Contains key-value pairs to configure the sales day closing time and settlement delay for a
   * balance account.
   */
  platformPaymentConfiguration?: PlatformPaymentConfiguration1;
  /** Your reference to the balance account. */
  reference?: string;
  /**
   * The status of the balance account. Payment instruments linked to the balance account can only
   * be used if the balance account status is **active**.
   *
   * Possible values: **active**, **closed**, **suspended**.
   */
  status?: Status43;
  /**
   * The time zone of the balance account. For example, **Europe/Amsterdam**. Defaults to the time
   * zone of the account holder if no time zone is set. For possible values, see the [list of time
   * zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  timeZone?: string;
};

export const balanceAccountUpdateRequestSchema: Schema<BalanceAccountUpdateRequest> =
  s.object<BalanceAccountUpdateRequest>({
    accountHolderId: s.optional(s.string()),
    description: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.string())),
    platformPaymentConfiguration: s.optional(s.lazy(() => platformPaymentConfiguration1Schema)),
    reference: s.optional(s.string()),
    status: s.optional(s.lazy(() => status43Schema)),
    timeZone: s.optional(s.string()),
  });
