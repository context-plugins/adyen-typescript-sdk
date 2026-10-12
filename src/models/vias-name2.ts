import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { genderSchema, type Gender } from "./gender.js";

/**
 * The name of the individual. >Make sure your account holder registers using the name shown on
 * their Photo ID. Maximum length: 80 characters Cannot contain numbers. /n Cannot be empty.
 */
export type ViasName2 = {
  /** The first name. */
  firstName?: string;
  /** The gender. >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`. */
  gender?: Gender;
  /** The name's infix, if applicable. >A maximum length of twenty (20) characters is imposed. */
  infix?: string;
  /** The last name. */
  lastName?: string;
};

export const viasName2Schema: Schema<ViasName2> = s.object<ViasName2>({
  firstName: s.optional(s.string()),
  gender: s.optional(s.lazy(() => genderSchema)),
  infix: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
