import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentValidationsNameResultResponse = {
  firstName?: string;
  fullName?: string;
  lastName?: string;
  middleName?: string;
};

export const paymentValidationsNameResultResponseSchema: Schema<PaymentValidationsNameResultResponse> =
  s.object<PaymentValidationsNameResultResponse>({
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    middleName: s.optional(s.string()),
  });
