import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MccsRestriction1 = {
  operation: string;
  value?: string[];
};

export const mccsRestriction1Schema: Schema<MccsRestriction1> = s.object<MccsRestriction1>({
  operation: s.string(),
  value: s.optional(s.array(s.string())),
});
