import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentification1Schema,
  type AdditionalBankIdentification1,
} from "./additional-bank-identification1.js";

export type NumberAndBicAccountIdentification = {
  /**
   * The bank account number, without separators or whitespace. The length and format depends on the
   * bank or country.
   */
  accountNumber: string;
  /**
   * Additional identification codes of the bank. Some banks may require these identifiers for
   * cross-border transfers.
   */
  additionalBankIdentification?: AdditionalBankIdentification1;
  /** The bank's 8- or 11-character BIC or SWIFT code. */
  bic: string;
  /** **numberAndBic** @default "numberAndBic" */
  type?: "numberAndBic";
};

export const numberAndBicAccountIdentificationSchema: Schema<NumberAndBicAccountIdentification> =
  s.object<NumberAndBicAccountIdentification>({
    accountNumber: s.string(),
    additionalBankIdentification: s.optional(s.lazy(() => additionalBankIdentification1Schema)),
    bic: s.string(),
    type: s.defaulted(s.literal("numberAndBic"), "numberAndBic"),
  });
