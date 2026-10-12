import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type RefundFundsTransferResponse = {
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /**
   * The value supplied by the executing user when initiating the transfer refund; may be used to
   * link multiple transactions.
   */
  merchantReference?: string;
  /** The message of the response. */
  message?: string;
  /** A PSP reference of the original fund transfer. */
  originalReference?: string;
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const refundFundsTransferResponseSchema: Schema<RefundFundsTransferResponse> =
  s.object<RefundFundsTransferResponse>({
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    merchantReference: s.optional(s.string()),
    message: s.optional(s.string()),
    originalReference: s.optional(s.string()),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });
