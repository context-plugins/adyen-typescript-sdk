import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RelayedAuthorisationData2 = {
  metadata?: Record<string, string>;
  reference?: string;
};

export const relayedAuthorisationData2Schema: Schema<RelayedAuthorisationData2> =
  s.object<RelayedAuthorisationData2>({
    metadata: s.optional(s.record(s.string(), s.string())),
    reference: s.optional(s.string()),
  });
