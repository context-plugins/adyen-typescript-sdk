import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { status22Schema, type Status22 } from "./status22.js";

export type CloseAccountResponse = {
  /** The account code of the account that is closed. */
  accountCode?: string;
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
  /**
   * The new status of the account. >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
   */
  status?: Status22;
};

export const closeAccountResponseSchema: Schema<CloseAccountResponse> = s.object<CloseAccountResponse>({
  accountCode: s.optional(s.string()),
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
  status: s.optional(s.lazy(() => status22Schema)),
});
