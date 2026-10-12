import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalReason = {
  /** The reason code. */
  code?: string;
  /** The description of the reason code. */
  description?: string;
  /** The namespace for the reason code. */
  namespace?: string;
};

export const externalReasonSchema: Schema<ExternalReason> = s.object<ExternalReason>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  namespace: s.optional(s.string()),
});
