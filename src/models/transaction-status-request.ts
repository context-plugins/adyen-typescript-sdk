import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentQualifierSchema, type DocumentQualifier } from "./document-qualifier.js";
import { messageReference2Schema, type MessageReference2 } from "./message-reference2.js";

export type TransactionStatusRequest = {
  messageReference?: MessageReference2;
  receiptReprintFlag?: boolean;
  documentQualifier?: DocumentQualifier[];
};

export const transactionStatusRequestSchema: Schema<TransactionStatusRequest> =
  s.object<TransactionStatusRequest>({
    messageReference: s.optional(s.lazy(() => messageReference2Schema)),
    receiptReprintFlag: s.optional(s.boolean()),
    documentQualifier: s.optional(s.array(s.lazy(() => documentQualifierSchema))),
    _keysMap: {
      messageReference: "MessageReference",
      receiptReprintFlag: "ReceiptReprintFlag",
      documentQualifier: "DocumentQualifier",
    },
  });
