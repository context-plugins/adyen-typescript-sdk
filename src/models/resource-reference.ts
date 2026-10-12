import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceReference = {
  /** The description of the resource. */
  description?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The reference for the resource. */
  reference?: string;
};

export const resourceReferenceSchema: Schema<ResourceReference> = s.object<ResourceReference>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
