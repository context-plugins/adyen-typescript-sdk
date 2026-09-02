import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category2Schema, type Category2 } from "./category2.js";
import { priority2Schema, type Priority2 } from "./priority2.js";
import { requirementSchema, type Requirement } from "./unions/requirement.js";

export type TransferRoute = {
  category?: Category2;
  country?: string;
  currency?: string;
  priority?: Priority2;
  requirements?: Requirement[];
};

export const transferRouteSchema: Schema<TransferRoute> = s.object<TransferRoute>({
  category: s.optional(s.lazy(() => category2Schema)),
  country: s.optional(s.string()),
  currency: s.optional(s.string()),
  priority: s.optional(s.lazy(() => priority2Schema)),
  requirements: s.optional(s.array(s.lazy(() => requirementSchema))),
});
