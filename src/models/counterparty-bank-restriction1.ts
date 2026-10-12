import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankIdentificationSchema, type BankIdentification } from "./bank-identification.js";

/**
 * Contains a list of counterparty financial institutions and how they must be evaluated.
 *
 * Supported operations: **anyMatch**, **noneMatch**.
 */
export type CounterpartyBankRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The list of counterparty bank institutions to be evaluated. */
  value?: BankIdentification[];
};

export const counterpartyBankRestriction1Schema: Schema<CounterpartyBankRestriction1> =
  s.object<CounterpartyBankRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => bankIdentificationSchema))),
  });
