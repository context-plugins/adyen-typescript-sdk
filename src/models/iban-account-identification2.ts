import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentification2 = {
  type?: string;
  iban: string;
};

export const ibanAccountIdentification2Schema: Schema<IbanAccountIdentification2> =
  s.object<IbanAccountIdentification2>({
    type: s.optional(s.string()),
    iban: s.string(),
  });
