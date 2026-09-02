import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentifier = {
  bban: string;
  bic: string;
  iban: string;
};

export const ibanAccountIdentifierSchema: Schema<IbanAccountIdentifier> = s.object<IbanAccountIdentifier>({
  bban: s.string(),
  bic: s.string(),
  iban: s.string(),
});
