import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentValidationsNameResultRawResponse2Schema,
  type PaymentValidationsNameResultRawResponse2,
} from "./payment-validations-name-result-raw-response2.js";
import {
  paymentValidationsNameResultResponse2Schema,
  type PaymentValidationsNameResultResponse2,
} from "./payment-validations-name-result-response2.js";
import { statusSchema, type Status } from "./status.js";

export type PaymentValidationsNameResponse = {
  /** Contains the raw response(s) returned by the scheme for the name validation. */
  rawResponse?: PaymentValidationsNameResultRawResponse2;
  /** Contains the scheme-agnostic match values returned by Adyen. */
  result?: PaymentValidationsNameResultResponse2;
  /**
   * Informs you if the name validation was performed. Possible values:
   *
   * **performed**, **notPerformed**, **notSupported**
   */
  status?: Status;
};

export const paymentValidationsNameResponseSchema: Schema<PaymentValidationsNameResponse> =
  s.object<PaymentValidationsNameResponse>({
    rawResponse: s.optional(s.lazy(() => paymentValidationsNameResultRawResponse2Schema)),
    result: s.optional(s.lazy(() => paymentValidationsNameResultResponse2Schema)),
    status: s.optional(s.lazy(() => statusSchema)),
  });
