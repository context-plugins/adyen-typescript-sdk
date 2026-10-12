import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { avsAddress1Schema, type AvsAddress1 } from "./avs-address1.js";
import { expiryMonthSchema, type ExpiryMonth } from "./expiry-month.js";
import {
  threeDDirectoryServerResponseSchema,
  type ThreeDDirectoryServerResponse,
} from "./three-ddirectory-server-response.js";

export type TestCardRange = {
  /**
   * Contains the billing address of the card holder. The address details need to be AVS-compliant,
   * which means that you need to provide at least street address.
   */
  address?: AvsAddress1;
  /** The name of the card holder, as it appears on the card, for the test card range. */
  cardHolderName: string;
  /**
   * The test card range security code.
   *
   * Example: 123
   */
  cvc?: string;
  /**
   * Expiry month for the test card range.
   *
   * Allowed values:
   * * JANUARY
   * * FEBRUARY
   * * MARCH
   * * APRIL
   * * MAY
   * * JUNE
   * * JULY
   * * AUGUST
   * * SEPTEMBER
   * * OCTOBER
   * * NOVEMBER
   * * DECEMBER
   */
  expiryMonth: ExpiryMonth;
  /**
   * Expiry year for the test card range.
   *
   * Example: 2020
   */
  expiryYear: number;
  /**
   * The last test card number in the test card range (inclusive):
   *
   * * Min 6, max 19 digits
   * * BIN compliant Example: 5432 1234 1234 4321
   */
  rangeEnd: string;
  /**
   * The first test card number in the test card range (inclusive):
   *
   * * Min 6, max 19 digits
   * * BIN compliant Example: 5432 1234 1234 1234
   */
  rangeStart: string;
  /**
   * 3D Secure server response. It notifies whether the specified card holder is enrolled in a 3D
   * Secure service. Possible values:
   *
   * * Y (Authentication available)
   * * N (Card holder not enrolled/not participating)
   * * U (Unable to authenticate)
   */
  threeDDirectoryServerResponse?: ThreeDDirectoryServerResponse;
  /** The password used for 3D Secure authentication. */
  threeDPassword?: string;
  /** The username used for 3D Secure authentication. */
  threeDUsername?: string;
};

export const testCardRangeSchema: Schema<TestCardRange> = s.object<TestCardRange>({
  address: s.optional(s.lazy(() => avsAddress1Schema)),
  cardHolderName: s.string(),
  cvc: s.optional(s.string()),
  expiryMonth: expiryMonthSchema,
  expiryYear: s.int(),
  rangeEnd: s.string(),
  rangeStart: s.string(),
  threeDDirectoryServerResponse: s.optional(s.lazy(() => threeDDirectoryServerResponseSchema)),
  threeDPassword: s.optional(s.string()),
  threeDUsername: s.optional(s.string()),
});
