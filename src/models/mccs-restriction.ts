import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MccsRestriction = {
  operation: string;
  value?: string[];
};

export const mccsRestrictionSchema: Schema<MccsRestriction> = s.object<MccsRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.string())),
});
