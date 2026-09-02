import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achAccountIdentifier1Schema, type AchAccountIdentifier1 } from "./ach-account-identifier1.js";
import { bacsAccountIdentifier2Schema, type BacsAccountIdentifier2 } from "./bacs-account-identifier2.js";
import { bsbAccountIdentifier2Schema, type BsbAccountIdentifier2 } from "./bsb-account-identifier2.js";
import { eftAccountIdentifier2Schema, type EftAccountIdentifier2 } from "./eft-account-identifier2.js";
import { ibanAccountIdentifier2Schema, type IbanAccountIdentifier2 } from "./iban-account-identifier2.js";
import { rixAccountIdentifier2Schema, type RixAccountIdentifier2 } from "./rix-account-identifier2.js";

export type AccountIdentifiers = {
  ach?: AchAccountIdentifier1;
  bacs?: BacsAccountIdentifier2;
  bsb?: BsbAccountIdentifier2;
  eft?: EftAccountIdentifier2;
  iban?: IbanAccountIdentifier2;
  rix?: RixAccountIdentifier2;
};

export const accountIdentifiersSchema: Schema<AccountIdentifiers> = s.object<AccountIdentifiers>({
  ach: s.optional(s.lazy(() => achAccountIdentifier1Schema)),
  bacs: s.optional(s.lazy(() => bacsAccountIdentifier2Schema)),
  bsb: s.optional(s.lazy(() => bsbAccountIdentifier2Schema)),
  eft: s.optional(s.lazy(() => eftAccountIdentifier2Schema)),
  iban: s.optional(s.lazy(() => ibanAccountIdentifier2Schema)),
  rix: s.optional(s.lazy(() => rixAccountIdentifier2Schema)),
});
