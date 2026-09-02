import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BirthData = {
  dateOfBirth?: string;
};

export const birthDataSchema: Schema<BirthData> = s.object<BirthData>({
  dateOfBirth: s.optional(s.string()),
});
