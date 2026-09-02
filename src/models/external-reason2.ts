import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalReason2 = {
  code?: string;
  description?: string;
  namespace?: string;
};

export const externalReason2Schema: Schema<ExternalReason2> = s.object<ExternalReason2>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  namespace: s.optional(s.string()),
});
