import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/** Details to provide if `type` is **paybybank_plaid**. */
export type PayByBankPlaidInfo1 = {
  /**
   * Merchant logo (max. size 150kB). Format: Base64-encoded string.
   *
   * @deprecated
   */
  logo?: string;
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const payByBankPlaidInfo1Schema: Schema<PayByBankPlaidInfo1> = s.object<PayByBankPlaidInfo1>({
  logo: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
