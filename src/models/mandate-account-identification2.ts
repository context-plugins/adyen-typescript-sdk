import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MandateAccountIdentification2 = {
  type?: string;
};

export const mandateAccountIdentification2Schema: Schema<MandateAccountIdentification2> =
  s.object<MandateAccountIdentification2>({
    type: s.optional(s.string()),
  });
