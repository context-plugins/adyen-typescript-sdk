import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DkLocalAccountIdentification = {
  /** The 4-10 digits bank account number (Kontonummer) (without separators or whitespace). */
  accountNumber: string;
  /** The 4-digit bank code (Registreringsnummer) (without separators or whitespace). */
  bankCode: string;
  /** **dkLocal** @default "dkLocal" */
  type?: "dkLocal";
};

export const dkLocalAccountIdentificationSchema: Schema<DkLocalAccountIdentification> =
  s.object<DkLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    type: s.defaulted(s.literal("dkLocal"), "dkLocal"),
  });
