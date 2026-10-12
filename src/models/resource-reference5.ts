import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The account holder associated with the balance account involved in the transfer. */
export type ResourceReference5 = {
  /** The description of the resource. */
  description?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The reference for the resource. */
  reference?: string;
};

export const resourceReference5Schema: Schema<ResourceReference5> = s.object<ResourceReference5>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
