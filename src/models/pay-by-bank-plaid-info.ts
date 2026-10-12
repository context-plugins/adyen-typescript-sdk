import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type PayByBankPlaidInfo = {
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

export const payByBankPlaidInfoSchema: Schema<PayByBankPlaidInfo> = s.object<PayByBankPlaidInfo>({
  logo: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
