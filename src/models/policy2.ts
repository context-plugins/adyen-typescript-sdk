import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceSchema, type Resource } from "./unions/resource.js";

export type Policy2 = {
  resources?: Resource[];
  roles?: string[];
};

export const policy2Schema: Schema<Policy2> = s.object<Policy2>({
  resources: s.optional(s.array(s.lazy(() => resourceSchema))),
  roles: s.optional(s.array(s.string())),
});
