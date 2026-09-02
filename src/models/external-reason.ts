import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalReason = {
  code?: string;
  description?: string;
  namespace?: string;
};

export const externalReasonSchema: Schema<ExternalReason> = s.object<ExternalReason>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  namespace: s.optional(s.string()),
});
