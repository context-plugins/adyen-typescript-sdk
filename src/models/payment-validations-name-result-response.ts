import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentValidationsNameResultResponse = {
  /**
   * Informs you if the first name your shopper provided matches the cardholder first name on file
   * at the issuing bank. The first name is only validated for Visa. Possible values:
   *
   * **match**, **partialMatch**, **noMatch**
   */
  firstName?: string;
  /**
   * Informs you if the full name your shopper provided matches the cardholder name on file at the
   * issuing bank. The full name is the only field that is validated for Mastercard. Possible
   * values:
   *
   * **match**, **partialMatch**, **noMatch**
   */
  fullName?: string;
  /**
   * Informs you if the last name your shopper provided matches the cardholder last name on file at
   * the issuing bank. The last name is only validated for Visa. Possible values:
   *
   * **match**, **partialMatch**, **noMatch**
   */
  lastName?: string;
  /**
   * Informs you if the middle name your shopper provided matches the cardholder middle name on file
   * at the issuing bank. The middle name is only validated for Visa. Possible values:
   *
   * **match**, **partialMatch**, **noMatch**
   */
  middleName?: string;
};

export const paymentValidationsNameResultResponseSchema: Schema<PaymentValidationsNameResultResponse> =
  s.object<PaymentValidationsNameResultResponse>({
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    middleName: s.optional(s.string()),
  });
