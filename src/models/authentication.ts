import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phone11Schema, type Phone11 } from "./phone11.js";

export type Authentication = {
  /** The email address where the one-time password (OTP) is sent. */
  email?: string;
  /**
   * The password used for 3D Secure password-based authentication. The value must be between 1 to
   * 30 characters and must only contain the following supported characters.
   *
   * * Characters between **a-z**, **A-Z**, and **0-9**
   *
   * * Special characters: **äöüßÄÖÜ+-*&#47;ç%()=?!~#'",;:$&àùòâôûáúó**
   */
  password?: string;
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
  phone?: Phone11;
};

export const authenticationSchema: Schema<Authentication> = s.object<Authentication>({
  email: s.optional(s.string()),
  password: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phone11Schema)),
});
