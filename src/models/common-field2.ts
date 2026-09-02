import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CommonField2 = {
  name?: string;
  version?: string;
};

export const commonField2Schema: Schema<CommonField2> = s.object<CommonField2>({
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
