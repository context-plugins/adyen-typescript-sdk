import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * If you are using relayed authorisation, this object contains information from the relayed
 * authorisation response from your server.
 */
export type RelayedAuthorisationData2 = {
  /**
   * Contains key-value pairs of your references and descriptions, for example,
   * `customId`:`your-own-custom-field-12345`.
   */
  metadata?: Record<string, string>;
  /** Your reference for the relayed authorisation data. */
  reference?: string;
};

export const relayedAuthorisationData2Schema: Schema<RelayedAuthorisationData2> =
  s.object<RelayedAuthorisationData2>({
    metadata: s.optional(s.record(s.string(), s.string())),
    reference: s.optional(s.string()),
  });
