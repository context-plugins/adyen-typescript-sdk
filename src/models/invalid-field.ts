import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidField = {
  name: string;
  value: string;
  message: string;
};

export const invalidFieldSchema: Schema<InvalidField> = s.object<InvalidField>({
  name: s.string(),
  value: s.string(),
  message: s.string(),
});
