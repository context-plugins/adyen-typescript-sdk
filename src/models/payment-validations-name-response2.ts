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

export type PaymentValidationsNameResponse2 = {
  rawResponse?: PaymentValidationsNameResultRawResponse2;
  result?: PaymentValidationsNameResultResponse2;
  status?: Status;
};

export const paymentValidationsNameResponse2Schema: Schema<PaymentValidationsNameResponse2> =
  s.object<PaymentValidationsNameResponse2>({
    rawResponse: s.optional(s.lazy(() => paymentValidationsNameResultRawResponse2Schema)),
    result: s.optional(s.lazy(() => paymentValidationsNameResultResponse2Schema)),
    status: s.optional(s.lazy(() => statusSchema)),
  });
