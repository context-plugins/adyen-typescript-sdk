import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceReference5 = {
  description?: string;
  id?: string;
  reference?: string;
};

export const resourceReference5Schema: Schema<ResourceReference5> = s.object<ResourceReference5>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
