import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type410Schema, type Type410 } from "./type410.js";

/**
 * The phone number where the one-time password (OTP) is sent.
 *
 * This object must have:
 *
 * * A `type` set to **mobile**.
 *
 * * A `number` with a valid country code.
 *
 * * A `number` with more than 4 digits, excluding the country code.
 *
 * >Make sure to verify that the card user owns the phone number.
 */
export type Phone11 = {
  /**
   * The full phone number provided as a single string. For example, **"0031 6 11 22 33 44"**,
   * **"+316/1122-3344"**,
   *
   * or **"(0031) 611223344"**.
   */
  number: string;
  /** Type of phone number. Possible values: **Landline**, **Mobile**. */
  type: Type410;
};

export const phone11Schema: Schema<Phone11> = s.object<Phone11>({
  number: s.string(),
  type: type410Schema,
});
