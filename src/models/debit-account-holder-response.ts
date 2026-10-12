import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type DebitAccountHolderResponse = {
  /** The code of the account holder. */
  accountHolderCode?: string;
  /**
   * The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.
   */
  bankAccountUuid?: string;
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** List of the `reference` values from the `split` array in the request. */
  merchantReferences?: string[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
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
