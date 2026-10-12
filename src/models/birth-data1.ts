import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The individual's birth information. */
export type BirthData1 = {
  /** The individual's date of birth, in YYYY-MM-DD format. */
  dateOfBirth?: string;
};

export const birthData1Schema: Schema<BirthData1> = s.object<BirthData1>({
  dateOfBirth: s.optional(s.string()),
});
