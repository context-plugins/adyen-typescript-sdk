import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidField = {
  /** The field that has an invalid value. */
  name: string;
  /** The invalid value. */
  value: string;
  /** Description of the validation error. */
  message: string;
};

export const invalidFieldSchema: Schema<InvalidField> = s.object<InvalidField>({
  name: s.string(),
  value: s.string(),
  message: s.string(),
});
