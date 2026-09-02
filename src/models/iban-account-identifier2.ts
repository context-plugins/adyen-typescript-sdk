import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentifier2 = {
  bban: string;
  bic: string;
  iban: string;
};

export const ibanAccountIdentifier2Schema: Schema<IbanAccountIdentifier2> = s.object<IbanAccountIdentifier2>({
  bban: s.string(),
  bic: s.string(),
  iban: s.string(),
});
