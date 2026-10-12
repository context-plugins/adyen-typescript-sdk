import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetUploadedDocumentsRequest = {
  /** The code of the Account Holder for which to retrieve the documents. */
  accountHolderCode: string;
  /** The code of the Bank Account for which to retrieve the documents. */
  bankAccountUuid?: string;
  /** The code of the Shareholder for which to retrieve the documents. */
  shareholderCode?: string;
};

export const getUploadedDocumentsRequestSchema: Schema<GetUploadedDocumentsRequest> =
  s.object<GetUploadedDocumentsRequest>({
    accountHolderCode: s.string(),
    bankAccountUuid: s.optional(s.string()),
    shareholderCode: s.optional(s.string()),
    _keysMap: {
      bankAccountUuid: "bankAccountUUID",
    },
  });
