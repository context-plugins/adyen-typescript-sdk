import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RelayedAuthorisationData = {
  /**
   * Contains key-value pairs of your references and descriptions, for example,
   * `customId`:`your-own-custom-field-12345`.
   */
  metadata?: Record<string, string>;
  /** Your reference for the relayed authorisation data. */
  reference?: string;
};

export const relayedAuthorisationDataSchema: Schema<RelayedAuthorisationData> =
  s.object<RelayedAuthorisationData>({
    metadata: s.optional(s.record(s.string(), s.string())),
    reference: s.optional(s.string()),
  });
