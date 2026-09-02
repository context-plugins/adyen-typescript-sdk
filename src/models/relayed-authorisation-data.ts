import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RelayedAuthorisationData = {
  metadata?: Record<string, string>;
  reference?: string;
};

export const relayedAuthorisationDataSchema: Schema<RelayedAuthorisationData> =
  s.object<RelayedAuthorisationData>({
    metadata: s.optional(s.record(s.string(), s.string())),
    reference: s.optional(s.string()),
  });
