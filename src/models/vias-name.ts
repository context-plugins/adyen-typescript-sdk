import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { genderSchema, type Gender } from "./gender.js";

export type ViasName = {
  firstName?: string;
  gender?: Gender;
  infix?: string;
  lastName?: string;
};

export const viasNameSchema: Schema<ViasName> = s.object<ViasName>({
  firstName: s.optional(s.string()),
  gender: s.optional(s.lazy(() => genderSchema)),
  infix: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
