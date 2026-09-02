import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentification11Schema,
  type AdditionalBankIdentification11,
} from "./additional-bank-identification11.js";
import { type251Schema, type Type251 } from "./type251.js";

export type NumberAndBicAccountIdentification1 = {
  accountNumber: string;
  additionalBankIdentification?: AdditionalBankIdentification11;
  bic: string;
  type: Type251;
};

export const numberAndBicAccountIdentification1Schema: Schema<NumberAndBicAccountIdentification1> =
  s.object<NumberAndBicAccountIdentification1>({
    accountNumber: s.string(),
    additionalBankIdentification: s.optional(s.lazy(() => additionalBankIdentification11Schema)),
    bic: s.string(),
    type: type251Schema,
  });
