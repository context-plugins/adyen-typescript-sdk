import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankIdentificationSchema, type BankIdentification } from "./bank-identification.js";

export type CounterpartyBankRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The list of counterparty bank institutions to be evaluated. */
  value?: BankIdentification[];
};

export const counterpartyBankRestrictionSchema: Schema<CounterpartyBankRestriction> =
  s.object<CounterpartyBankRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => bankIdentificationSchema))),
  });
