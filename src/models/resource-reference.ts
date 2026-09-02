import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceReference = {
  description?: string;
  id?: string;
  reference?: string;
};

export const resourceReferenceSchema: Schema<ResourceReference> = s.object<ResourceReference>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
