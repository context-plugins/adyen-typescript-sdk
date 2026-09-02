import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BirthData1 = {
  dateOfBirth?: string;
};

export const birthData1Schema: Schema<BirthData1> = s.object<BirthData1>({
  dateOfBirth: s.optional(s.string()),
});
