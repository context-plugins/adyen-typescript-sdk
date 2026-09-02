import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CommonField4 = {
  name?: string;
  version?: string;
};

export const commonField4Schema: Schema<CommonField4> = s.object<CommonField4>({
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
