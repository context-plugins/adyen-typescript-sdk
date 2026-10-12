import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountTransactionListSchema, type AccountTransactionList } from "./account-transaction-list.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type AccountHolderTransactionListResponse = {
  /** A list of the transactions. */
  accountTransactionLists?: AccountTransactionList[];
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const accountHolderTransactionListResponseSchema: Schema<AccountHolderTransactionListResponse> =
  s.object<AccountHolderTransactionListResponse>({
    accountTransactionLists: s.optional(s.array(s.lazy(() => accountTransactionListSchema))),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });
