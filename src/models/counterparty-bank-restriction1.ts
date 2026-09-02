import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankIdentificationSchema, type BankIdentification } from "./bank-identification.js";

export type CounterpartyBankRestriction1 = {
  operation: string;
  value?: BankIdentification[];
};

export const counterpartyBankRestriction1Schema: Schema<CounterpartyBankRestriction1> =
  s.object<CounterpartyBankRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => bankIdentificationSchema))),
  });
