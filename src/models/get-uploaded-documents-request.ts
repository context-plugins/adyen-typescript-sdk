import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetUploadedDocumentsRequest = {
  accountHolderCode: string;
  bankAccountUuid?: string;
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
