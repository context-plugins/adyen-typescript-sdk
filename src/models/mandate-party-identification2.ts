import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MandatePartyIdentification2 = {
  fullName?: string;
};

export const mandatePartyIdentification2Schema: Schema<MandatePartyIdentification2> =
  s.object<MandatePartyIdentification2>({
    fullName: s.optional(s.string()),
  });
