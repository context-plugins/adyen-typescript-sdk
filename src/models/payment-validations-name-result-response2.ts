import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentValidationsNameResultResponse2 = {
  firstName?: string;
  fullName?: string;
  lastName?: string;
  middleName?: string;
};

export const paymentValidationsNameResultResponse2Schema: Schema<PaymentValidationsNameResultResponse2> =
  s.object<PaymentValidationsNameResultResponse2>({
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    middleName: s.optional(s.string()),
  });
