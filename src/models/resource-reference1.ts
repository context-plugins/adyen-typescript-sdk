import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the balance account involved in the transfer. */
export type ResourceReference1 = {
  /** The description of the resource. */
  description?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The reference for the resource. */
  reference?: string;
};

export const resourceReference1Schema: Schema<ResourceReference1> = s.object<ResourceReference1>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
