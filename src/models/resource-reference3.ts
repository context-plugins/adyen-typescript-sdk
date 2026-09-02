import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceReference3 = {
  description?: string;
  id?: string;
  reference?: string;
};

export const resourceReference3Schema: Schema<ResourceReference3> = s.object<ResourceReference3>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
