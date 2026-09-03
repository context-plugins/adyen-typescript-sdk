import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentification11Schema,
  type AdditionalBankIdentification11,
} from "./additional-bank-identification11.js";

export type NumberAndBicAccountIdentification1 = {
  type: string;
  accountNumber: string;
  additionalBankIdentification?: AdditionalBankIdentification11;
  bic: string;
};

export const numberAndBicAccountIdentification1Schema: Schema<NumberAndBicAccountIdentification1> =
  s.object<NumberAndBicAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    additionalBankIdentification: s.optional(s.lazy(() => additionalBankIdentification11Schema)),
    bic: s.string(),
  });
