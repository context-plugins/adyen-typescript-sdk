import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the raw response(s) returned by the scheme for the name validation. */
export type PaymentValidationsNameResultRawResponse2 = {
  /**
   * The raw first name validation result that Adyen received from the scheme. First name validation
   * result is only returned for Visa.
   */
  firstName?: string;
  /**
   * The raw full name validation result that Adyen received from the scheme. Full name is the only
   * field that is validated for Mastercard
   */
  fullName?: string;
  /**
   * The raw last name validation result that Adyen received from the scheme. Last name validation
   * result is only returned for Visa.
   */
  lastName?: string;
  /**
   * The raw middle name validation result that Adyen received from the scheme. Middle name
   * validation result is only returned for Visa.
   */
  middleName?: string;
  /**
   * The raw name validation status value that Adyen received from the scheme. Only returned for
   * Visa.
   */
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
