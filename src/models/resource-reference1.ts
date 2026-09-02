import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceReference1 = {
  description?: string;
  id?: string;
  reference?: string;
};

export const resourceReference1Schema: Schema<ResourceReference1> = s.object<ResourceReference1>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
