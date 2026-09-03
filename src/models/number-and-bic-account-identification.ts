import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentification1Schema,
  type AdditionalBankIdentification1,
} from "./additional-bank-identification1.js";

export type NumberAndBicAccountIdentification = {
  accountNumber: string;
  additionalBankIdentification?: AdditionalBankIdentification1;
  bic: string;
  type: "numberAndBic";
};

export const numberAndBicAccountIdentificationSchema: Schema<NumberAndBicAccountIdentification> =
  s.object<NumberAndBicAccountIdentification>({
    accountNumber: s.string(),
    additionalBankIdentification: s.optional(s.lazy(() => additionalBankIdentification1Schema)),
    bic: s.string(),
    type: s.literal("numberAndBic"),
  });
