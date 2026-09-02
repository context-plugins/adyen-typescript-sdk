import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountTransactionListSchema, type AccountTransactionList } from "./account-transaction-list.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type AccountHolderTransactionListResponse = {
  accountTransactionLists?: AccountTransactionList[];
  invalidFields?: ErrorFieldType[];
  pspReference?: string;
  resultCode?: string;
};

export const accountHolderTransactionListResponseSchema: Schema<AccountHolderTransactionListResponse> =
  s.object<AccountHolderTransactionListResponse>({
    accountTransactionLists: s.optional(s.array(s.lazy(() => accountTransactionListSchema))),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });
