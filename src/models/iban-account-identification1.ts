import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentification1 = {
  type: string;
  bic?: string;
  iban: string;
};

export const ibanAccountIdentification1Schema: Schema<IbanAccountIdentification1> =
  s.object<IbanAccountIdentification1>({
    type: s.string(),
    bic: s.optional(s.string()),
    iban: s.string(),
  });
