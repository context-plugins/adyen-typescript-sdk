import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalReason1 = {
  code?: string;
  description?: string;
  namespace?: string;
};

export const externalReason1Schema: Schema<ExternalReason1> = s.object<ExternalReason1>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  namespace: s.optional(s.string()),
});
