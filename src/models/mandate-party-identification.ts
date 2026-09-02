import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MandatePartyIdentification = {
  fullName?: string;
};

export const mandatePartyIdentificationSchema: Schema<MandatePartyIdentification> =
  s.object<MandatePartyIdentification>({
    fullName: s.optional(s.string()),
  });
