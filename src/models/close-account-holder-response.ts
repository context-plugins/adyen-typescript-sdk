import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderStatus1Schema, type AccountHolderStatus1 } from "./account-holder-status1.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type CloseAccountHolderResponse = {
  accountHolderStatus?: AccountHolderStatus1;
  invalidFields?: ErrorFieldType[];
  pspReference?: string;
  resultCode?: string;
};

export const closeAccountHolderResponseSchema: Schema<CloseAccountHolderResponse> =
  s.object<CloseAccountHolderResponse>({
    accountHolderStatus: s.optional(s.lazy(() => accountHolderStatus1Schema)),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });
