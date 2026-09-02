import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentValidationsNameResultRawResponse2 = {
  firstName?: string;
  fullName?: string;
  lastName?: string;
  middleName?: string;
  status?: string;
};

export const paymentValidationsNameResultRawResponse2Schema: Schema<PaymentValidationsNameResultRawResponse2> =
  s.object<PaymentValidationsNameResultRawResponse2>({
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    middleName: s.optional(s.string()),
    status: s.optional(s.string()),
  });
