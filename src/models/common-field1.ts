import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CommonField1 = {
  name?: string;
  version?: string;
};

export const commonField1Schema: Schema<CommonField1> = s.object<CommonField1>({
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
