import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderStatus1Schema, type AccountHolderStatus1 } from "./account-holder-status1.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type CloseAccountHolderResponse = {
  /** The new status of the Account Holder. */
  accountHolderStatus?: AccountHolderStatus1;
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const closeAccountHolderResponseSchema: Schema<CloseAccountHolderResponse> =
  s.object<CloseAccountHolderResponse>({
    accountHolderStatus: s.optional(s.lazy(() => accountHolderStatus1Schema)),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });
