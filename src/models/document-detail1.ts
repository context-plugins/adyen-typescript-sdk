import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentTypeSchema, type DocumentType } from "./document-type.js";

export type DocumentDetail1 = {
  accountHolderCode?: string;
  bankAccountUuid?: string;
  description?: string;
  documentType: DocumentType;
  filename?: string;
  legalArrangementCode?: string;
  legalArrangementEntityCode?: string;
  shareholderCode?: string;
  signatoryCode?: string;
};

export const documentDetail1Schema: Schema<DocumentDetail1> = s.object<DocumentDetail1>({
  accountHolderCode: s.optional(s.string()),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  documentType: documentTypeSchema,
  filename: s.optional(s.string()),
  legalArrangementCode: s.optional(s.string()),
  legalArrangementEntityCode: s.optional(s.string()),
  shareholderCode: s.optional(s.string()),
  signatoryCode: s.optional(s.string()),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
