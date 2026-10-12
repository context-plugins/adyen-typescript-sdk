import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

/** **paybybank_plaid** details */
export type PayByBankPlaidResponseInfo1 = {
  /**
   * Merchant logo
   *
   * @deprecated
   */
  logo?: string;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const payByBankPlaidResponseInfo1Schema: Schema<PayByBankPlaidResponseInfo1> =
  s.object<PayByBankPlaidResponseInfo1>({
    logo: s.optional(s.string()),
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
  });
