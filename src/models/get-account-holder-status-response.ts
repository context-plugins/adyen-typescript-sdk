import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderStatus4Schema, type AccountHolderStatus4 } from "./account-holder-status4.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type GetAccountHolderStatusResponse = {
  accountHolderCode?: string;
  accountHolderStatus?: AccountHolderStatus4;
  invalidFields?: ErrorFieldType[];
  pspReference?: string;
  resultCode?: string;
};

export const getAccountHolderStatusResponseSchema: Schema<GetAccountHolderStatusResponse> =
  s.object<GetAccountHolderStatusResponse>({
    accountHolderCode: s.optional(s.string()),
    accountHolderStatus: s.optional(s.lazy(() => accountHolderStatus4Schema)),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });
