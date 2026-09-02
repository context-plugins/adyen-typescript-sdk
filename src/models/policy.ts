import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceSchema, type Resource } from "./unions/resource.js";

export type Policy = {
  resources?: Resource[];
  roles?: string[];
};

export const policySchema: Schema<Policy> = s.object<Policy>({
  resources: s.optional(s.array(s.lazy(() => resourceSchema))),
  roles: s.optional(s.array(s.string())),
});
