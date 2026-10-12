import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDetailBalanceSchema, type AccountDetailBalance } from "./account-detail-balance.js";
import { detailBalance1Schema, type DetailBalance1 } from "./detail-balance1.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type AccountHolderBalanceResponse = {
  /** A list of each account and their balances. */
  balancePerAccount?: AccountDetailBalance[];
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
  /** The total balance of the account holder. */
  totalBalance?: DetailBalance1;
};

export const accountHolderBalanceResponseSchema: Schema<AccountHolderBalanceResponse> =
  s.object<AccountHolderBalanceResponse>({
    balancePerAccount: s.optional(s.array(s.lazy(() => accountDetailBalanceSchema))),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
    totalBalance: s.optional(s.lazy(() => detailBalance1Schema)),
  });
