import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentValidationsNameResultRawResponse = {
  firstName?: string;
  fullName?: string;
  lastName?: string;
  middleName?: string;
  status?: string;
};

export const paymentValidationsNameResultRawResponseSchema: Schema<PaymentValidationsNameResultRawResponse> =
  s.object<PaymentValidationsNameResultRawResponse>({
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    middleName: s.optional(s.string()),
    status: s.optional(s.string()),
  });
