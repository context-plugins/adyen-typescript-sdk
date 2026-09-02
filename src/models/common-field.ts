import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CommonField = {
  name?: string;
  version?: string;
};

export const commonFieldSchema: Schema<CommonField> = s.object<CommonField>({
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
