import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type PayByBankPlaidResponseInfo = {
  /**
   * Merchant logo
   *
   * @deprecated
   */
  logo?: string;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const payByBankPlaidResponseInfoSchema: Schema<PayByBankPlaidResponseInfo> =
  s.object<PayByBankPlaidResponseInfo>({
    logo: s.optional(s.string()),
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
  });
