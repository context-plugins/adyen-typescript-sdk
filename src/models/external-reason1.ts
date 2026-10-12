import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The external reason for the transfer status. */
export type ExternalReason1 = {
  /** The reason code. */
  code?: string;
  /** The description of the reason code. */
  description?: string;
  /** The namespace for the reason code. */
  namespace?: string;
};

export const externalReason1Schema: Schema<ExternalReason1> = s.object<ExternalReason1>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  namespace: s.optional(s.string()),
});
