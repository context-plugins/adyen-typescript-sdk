import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The external reason of this transfer. */
export type ExternalReason2 = {
  /** The reason code. */
  code?: string;
  /** The description of the reason code. */
  description?: string;
  /** The namespace for the reason code. */
  namespace?: string;
};

export const externalReason2Schema: Schema<ExternalReason2> = s.object<ExternalReason2>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  namespace: s.optional(s.string()),
});
