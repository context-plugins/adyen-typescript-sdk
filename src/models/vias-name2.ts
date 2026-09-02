import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { genderSchema, type Gender } from "./gender.js";

export type ViasName2 = {
  firstName?: string;
  gender?: Gender;
  infix?: string;
  lastName?: string;
};

export const viasName2Schema: Schema<ViasName2> = s.object<ViasName2>({
  firstName: s.optional(s.string()),
  gender: s.optional(s.lazy(() => genderSchema)),
  infix: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
