import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MandatePartyIdentification = {
  /**
   * The full name of the entity that owns the bank account.
   *
   * Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? \@ ( ) " ' and space.
   */
  fullName?: string;
};

export const mandatePartyIdentificationSchema: Schema<MandatePartyIdentification> =
  s.object<MandatePartyIdentification>({
    fullName: s.optional(s.string()),
  });
