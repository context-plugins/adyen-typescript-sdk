import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { genderSchema, type Gender } from "./gender.js";

/** The name of the person. */
export type ViasName1 = {
  /** The first name. */
  firstName?: string;
  /** The gender. >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`. */
  gender?: Gender;
  /** The name's infix, if applicable. >A maximum length of twenty (20) characters is imposed. */
  infix?: string;
  /** The last name. */
  lastName?: string;
};

export const viasName1Schema: Schema<ViasName1> = s.object<ViasName1>({
  firstName: s.optional(s.string()),
  gender: s.optional(s.lazy(() => genderSchema)),
  infix: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
