import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionRuleSource = {
  /** ID of the resource, when applicable. */
  id?: string;
  /**
   * Indicates the type of resource for which the transaction rule is defined.
   *
   * Possible values:
   *
   *  * **PaymentInstrumentGroup**
   *
   * * **PaymentInstrument**
   *
   * * **BalancePlatform**
   *
   * * **EntityUsageConfiguration**
   *
   * * **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen.
   */
  type?: string;
};

export const transactionRuleSourceSchema: Schema<TransactionRuleSource> = s.object<TransactionRuleSource>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
});
