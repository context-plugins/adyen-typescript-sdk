import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentification11Schema,
  type AdditionalBankIdentification11,
} from "./additional-bank-identification11.js";

/** All Of BankAccountIdentification, NumberAndBicAccountIdentification1. */
export type NumberAndBicAccountIdentification1 = {
  /** **numberAndBic** @default "numberAndBic" */
  type?: string;
  /**
   * The bank account number, without separators or whitespace. The length and format depends on the
   * bank or country.
   */
  accountNumber: string;
  /**
   * Additional identification codes of the bank. Some banks may require these identifiers for
   * cross-border transfers.
   */
  additionalBankIdentification?: AdditionalBankIdentification11;
  /** The bank's 8- or 11-character BIC or SWIFT code. */
  bic: string;
};

export const numberAndBicAccountIdentification1Schema: Schema<NumberAndBicAccountIdentification1> =
  s.object<NumberAndBicAccountIdentification1>({
    type: s.defaulted(s.string(), "numberAndBic"),
    accountNumber: s.string(),
    additionalBankIdentification: s.optional(s.lazy(() => additionalBankIdentification11Schema)),
    bic: s.string(),
  });
