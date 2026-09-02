import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type DebitAccountHolderResponse = {
  accountHolderCode?: string;
  bankAccountUuid?: string;
  invalidFields?: ErrorFieldType[];
  merchantReferences?: string[];
  pspReference?: string;
  resultCode?: string;
};

export const debitAccountHolderResponseSchema: Schema<DebitAccountHolderResponse> =
  s.object<DebitAccountHolderResponse>({
    accountHolderCode: s.optional(s.string()),
    bankAccountUuid: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    merchantReferences: s.optional(s.array(s.string())),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
    _keysMap: {
      bankAccountUuid: "bankAccountUUID",
    },
  });
