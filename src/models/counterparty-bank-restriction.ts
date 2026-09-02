import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankIdentificationSchema, type BankIdentification } from "./bank-identification.js";

export type CounterpartyBankRestriction = {
  operation: string;
  value?: BankIdentification[];
};

export const counterpartyBankRestrictionSchema: Schema<CounterpartyBankRestriction> =
  s.object<CounterpartyBankRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => bankIdentificationSchema))),
  });
