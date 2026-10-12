import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the account holder associated with the `balanceAccount`. */
export type ResourceReference3 = {
  /** The description of the resource. */
  description?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The reference for the resource. */
  reference?: string;
};

export const resourceReference3Schema: Schema<ResourceReference3> = s.object<ResourceReference3>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
});
