import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BirthData = {
  /** The individual's date of birth, in YYYY-MM-DD format. */
  dateOfBirth?: string;
};

export const birthDataSchema: Schema<BirthData> = s.object<BirthData>({
  dateOfBirth: s.optional(s.string()),
});
