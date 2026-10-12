import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, DKLocalAccountIdentification1. */
export type DkLocalAccountIdentification1 = {
  /** **dkLocal** @default "dkLocal" */
  type?: string;
  /** The 4-10 digits bank account number (Kontonummer) (without separators or whitespace). */
  accountNumber: string;
  /** The 4-digit bank code (Registreringsnummer) (without separators or whitespace). */
  bankCode: string;
};

export const dkLocalAccountIdentification1Schema: Schema<DkLocalAccountIdentification1> =
  s.object<DkLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "dkLocal"),
    accountNumber: s.string(),
    bankCode: s.string(),
  });
