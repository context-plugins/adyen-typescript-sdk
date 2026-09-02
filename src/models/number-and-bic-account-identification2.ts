import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentification11Schema,
  type AdditionalBankIdentification11,
} from "./additional-bank-identification11.js";

export type NumberAndBicAccountIdentification2 = {
  type: string;
  accountNumber: string;
  additionalBankIdentification?: AdditionalBankIdentification11;
  bic: string;
};

export const numberAndBicAccountIdentification2Schema: Schema<NumberAndBicAccountIdentification2> =
  s.object<NumberAndBicAccountIdentification2>({
    type: s.string(),
    accountNumber: s.string(),
    additionalBankIdentification: s.optional(s.lazy(() => additionalBankIdentification11Schema)),
    bic: s.string(),
  });
