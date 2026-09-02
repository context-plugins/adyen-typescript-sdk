import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceReference4 = {
  description?: string;
  id?: string;
  reference?: string;
};

export const resourceReference4Schema: Schema<ResourceReference4> = s.object<ResourceReference4>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
