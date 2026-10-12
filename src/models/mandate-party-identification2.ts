import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the owner of the counterparty bank account. */
export type MandatePartyIdentification2 = {
  /**
   * The full name of the entity that owns the bank account.
   *
   * Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? \@ ( ) " ' and space.
   */
  fullName?: string;
};

export const mandatePartyIdentification2Schema: Schema<MandatePartyIdentification2> =
  s.object<MandatePartyIdentification2>({
    fullName: s.optional(s.string()),
  });
